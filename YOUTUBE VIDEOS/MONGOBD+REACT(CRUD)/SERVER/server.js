import mongoose from "mongoose";
import app from "./app";
import { dotenv } from 'dotenv';

dotenv.config()

const server = () => {

    mongoose.connect(process.env.DB_URL).
        then(() => { console.log("DbConnected") }).catch(error=>{console.log(error)})
 }




server()