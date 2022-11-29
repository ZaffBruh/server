const url="mongodb+srv://zawwad7:O9LNIB4gAahmaFv0@cluster0.kjwckhw.mongodb.net/?retryWrites=true&w=majority"
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose"
import User from "./User.js";

const app=express()
app.use(bodyParser.json());
app.use(cors());
const Port=process.env.PORT|| 8001
mongoose.connect(url,{
    useNewUrlParser: true,

})
mongoose.connection.once('open',()=>{
    console.log("database connected")
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(Port,()=>{
    console.log("server started at port 8001");
  })
app.post("/User",(req,res)=>{
    const user={
        email:req.body.email,
        name:req.body.name,
        img:req.body.img
    }
    new User(user,(err,data)=>{
        if(err){
            res.status(401).send("User Information not send")
        }

    else{
        res.status(200).send(data)
    }
    }).save()
})
app.get("/GetUser",(req,res)=>{
    User.find((err,data)=>{
        if(err){
            res.status(401).send("Worng Path")
        }
        else{
            res.status(200).send(data)
        }
    })
})