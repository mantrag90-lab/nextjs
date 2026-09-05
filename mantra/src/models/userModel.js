import mongoose from "mongoose";
import { verify } from "node:crypto";

const userSchema = new mongoose.Schema({
username:{
    type: String,
    required:[true,"please provide a usernmae"],
    unique: true,
},
email:{
    type:String,
    required:[true,"please provide a email"],
    unique: true,
},
password:{
    type:String,
    required:[true,"please provide a password"],

},
isVerified:{
    type:Boolean,
    default:false,
},
isAdmin:{
     type:Boolean,
    default:false,
},
forgetPasswordToken: String,
forgetPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry: Date, 

})

const User = mongoose.models.users || mongoose.model("User",userSchema);

export default User;