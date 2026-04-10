import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import config from "../config/index.js";


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const server = async() => {
    try {
        await mongoose.connect(config.db_url);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });

} catch (error) {

}
}

server()