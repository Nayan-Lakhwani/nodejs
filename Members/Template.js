const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const members = require("./Members");


app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

const PORT = 5000;
app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`) });
app.use(express.json());
app.use(express.urlencoded({defaultLayout:true}));
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Member App",
        members
    })
});

//middleware
app.use("/api/members",require("./API"));



