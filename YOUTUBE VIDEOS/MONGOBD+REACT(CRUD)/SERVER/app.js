import express from "express"

import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import { userRouter } from "./route/user.route.js"

dotenv.config()
const app = express()
app.use(bodyParser.json())


app.use(express.json())
app.use(cors())
app.post("/users",userRouter)
export default app;