import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import config from "../config/index.js";

// import  UserController  from "../controllers/userController.js";
import router from "../routes/user.Route.js";



const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// const server = async() => {
//     try {
//         await mongoose.connect(config.db_url);


//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });

// } catch (error) {

// }
// }


mongoose.connect(config.db_url).then(() => {
    console.log("DbConnecteds")
    app.listen(config.port,() => {
console.log("Server is Listening")
    })

})





    app.use("/api",router)