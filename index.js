const express = require("express");
const app=express();

const middleware1 = (req,res,next) => {
    res.send("middleware1");
}

app.use(middleware1);

app.get("/" , (req,res)=>{
    res.send("Hello");
})

app.get("/hi" , (req,res)=>{
    res.send("Hi");
})

app.get("/wishes" , (req,res)=>{
    res.send("Good morning");
})

app.listen(9090,function(){
    console.log("server is rinning");
})
