const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs");

let name = "";

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({defaultLayout:true}));

app.get("/",(req,res)=>{
    
    res.render("index",{
        title:"FizzBuzz App",
        
    });
});





app.use("/api/check",require("./API"))



app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`) });


