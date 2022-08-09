const express = require("express");
const app=express();
const defaultExport = require("./route/defaultexport");
const {namedEx} = require("./route/namedexport");
const {dataApi} = require("./route/CORS");

const middleware1 = (req,res,next) => {
    res.send("middleware1");
}

// app.use(middleware1);

app.get("/apiData",dataApi);

app.get("/" , (req,res)=>{
    res.send("Hello");
    console.log(defaultExport());
})

app.get("/hi" , (req,res)=>{
    res.send("Hi");
    console.log(namedEx());
})

app.get("/wishes" , (req,res)=>{
    res.send("Good morning");
})

app.listen(9090,function(){
    console.log("server is rinning");
})
