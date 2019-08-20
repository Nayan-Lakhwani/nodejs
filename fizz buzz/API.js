const express = require("express")
const router = express.Router();

router.post('/:number',(req,res)=>{
console.info(req.params);
     if((req.params.number)%3==0 && (req.params.number)%5 == 0){
    console.log("FizzBuzz");
    res.redirect("/");
    }
   else if((req.params.number)%3 == 0){
        console.log("Fizz");
        res.redirect("/");
    }
    else if((req.params.number)%5==0)
    {
        console.info("Buzz");
        res.redirect("/");
    }
   
    else
    console.log("number is not divisible by 3 and 5");

});

module.exports = router;