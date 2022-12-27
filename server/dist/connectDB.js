import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
export const mongooseConnectDB = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log(`🚀 Mongoose connected to ${MONGO_URL}`))
        .catch((err) => console.log("error connecting to the database", err));
};
