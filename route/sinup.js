const Route = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Good evening");
})

module.exports.named=app;


