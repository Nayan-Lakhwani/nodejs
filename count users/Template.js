const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs");

let counter ; 
fs.readFile('count.txt',(err,data)=>{
    if(data)
    counter = data.toString();
    else
    return console.error(err);
});

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

const PORT = 5000;
app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`) });

app.use(express.urlencoded({defaultLayout:true}));

app.get("/",(req,res)=>{
    counter++;
    fs.writeFile("count.txt",counter,(err)=>{
        if(err){
            return console.error(err);
        }
    });
    res.render("index",{
        title:"Counter App",
        counter
        
    });
});




