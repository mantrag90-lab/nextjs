 import {connect} from "@/dbConfig/dbConfig";
import User from  "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";


 connect()


 export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email,password} =reqBody 

        //check user already exist 
const user = await User.findOne({email})
if(user){
    return NextResponse.json({error:"user already exists"},{status:400})
}
//hash password 
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

const newUser = new User({
    username,email,password:hashedPassword
})

const savedUser= await newUser.save()
console.log(savedUser);

return NextResponse.json({
    message:"user created successfully",
    success:true,
    savedUser
},{status:201})

    } catch (error:any) {
        
    }
 }