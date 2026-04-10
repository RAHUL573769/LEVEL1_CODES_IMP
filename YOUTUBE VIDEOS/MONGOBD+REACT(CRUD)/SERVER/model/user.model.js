import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
     email: {
        type:String
    },
      address: {
        type:String
    }
})
const User=mongoose.model("User",userSchema)
export default User