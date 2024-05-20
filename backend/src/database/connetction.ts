import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DB_CONNECTION_STRING;
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

const dbStatus = () => {
    return mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
};
const mongo_uri = process.env.DB_CONNECTION_STRING_ATLAS;
async function connectToDbAtlas() {
    try {
        await mongoose.connect(mongo_uri);
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.log(`Error connecting to DB ${error.message}`);
    }
}

export {  connectToDbAtlas, dbStatus }