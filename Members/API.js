const express = require("express")
const uuid = require("uuid");
const members = require("./Members");
const router = express.Router();

router.get('/',(req,res)=>{res.json(members)});

router.get("/:id",(req,res)=>{
 
let member = members.filter((member)=> member.id == req.params.id);

if(member.length==1){
res.json(member);
}
else
res.status(400).json({msg:`member not found with id:${req.params.id}`})

});


    router.post('/',(req,res)=>{
    
            const newMember = {
            id:uuid.v4(),
            name:req.body.name,
            email:req.body.email,
            status:"active"
        } 
        if(!newMember.name || !newMember.email){
            return res.status(400).json({msg:"Please Include a name and email"});
        }
        members.push(newMember);
        res.redirect("/");
});



router.put('/:id',(req,res)=>{

    let data = members.filter((member)=>{
       if( member.id==req.params.id )
       {
           const updatedMember = req.body;
           member.name = (updatedMember.name)?updatedMember.name:member.name;
           member.email = (updatedMember.email)?updatedMember.email:member.email;
           res.json({msg:"Member Updated Successfully"});
       }
       else{
            res.statusCode(400).json({msg:`Cant find ID:${req.params.id}`});
       }
    
    });

});

router.delete('/',(req,res)=>{
       let mLength = members.length;
       members = members.filter((member)=>{member.id == !req.params.id });
       if(members.length == mLength)
       res.statusCode(400).json({msg:`Member with ID:${req.params.id} not found`});
       else
       res.json(`Member Updated Succesfully`);
})


module.exports = router;