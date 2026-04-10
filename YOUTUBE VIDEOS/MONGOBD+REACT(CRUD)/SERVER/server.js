
import dotenv from 'dotenv';
import cors  from 'cors';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import app from './app.js';
import { userRouter } from './route/user.route.js';
import express  from 'express';

const PORT =  3000;
const MONGOURL = process.env.DB_URL;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())




dotenv.config();


mongoose
  .connect("mongodb://localhost:27017/crudYoutube10April2026")
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT} `);
    });
  })
  .catch((error) => console.log(error));

app.post("/users",userRouter)