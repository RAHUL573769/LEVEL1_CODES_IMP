import express from "express"

import dotenv from "dotenv"

import bodyParser from "body-parser"
dotenv.config()
const app = express()
app.use(bodyParser.json())

app.use(express.json())
export default app;