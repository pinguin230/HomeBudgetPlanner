import express, {Request,NextFunction,Response} from "express";
import {loginUser, registerUser} from '../servises/user.service';
import {userLoginEntitySchema, userRegisterEntitySchema} from '../validation/user.validation';
import BadRequestError from '../error/bed.reqest.error';
let userRouter =express.Router();

userRouter.post('/register',  async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bodyValidation = userRegisterEntitySchema.validate(req.body);

        if (bodyValidation.error) {
            throw new BadRequestError(bodyValidation.error.details[0].message);
        }

        let userInfo = req.body;
        const userMessage = await registerUser(userInfo);

        res.status(201).json(userMessage);
    }
    catch (error) {
        next(error);
    }});
userRouter.post('/login',  async (req: Request, res: Response, next: NextFunction) => {
    try {

        const bodyValidation = userLoginEntitySchema.validate(req.body);

        if (bodyValidation.error) {
            throw new BadRequestError(bodyValidation.error.details[0].message);
        }

        let userInfo = req.body;
        const token = await loginUser(userInfo);

        res.status(201).json(token);
    }
    catch (error) {
        next(error);
    }});
export { userRouter };