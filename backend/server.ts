import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { userRouter } from './src/controllers/user.controller';
import {connectToDbAtlas} from './src/database/connetction'

const app = express();
const PORT = 5000 ;
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
// Example route
app.get('/', (req:Request, res: Response) => {
    res.send('API is working');
});
app.use('/api',userRouter);




app.listen(PORT, async () => {
    await connectToDbAtlas();
    console.log(`Server running on port ${PORT}`);
});

