import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    email:{
        require:true,
        type:String,
        unique:true,
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    img:{
        type:String,
        
    }

})
const User=mongoose.model("UserSchema",UserSchema)
export default User