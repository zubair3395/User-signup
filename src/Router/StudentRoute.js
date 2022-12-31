const Student = require("../Model/student");
const express = require('express');
// const { findOne } = require("../Model/student");
const { UserAuthencation } = require("../Utlis/Helper");
const router = express.Router();


router.post("/std", async(req,res)=>{
    const payload = req.body;
    console.log("paylod", payload);
    const std = new Student(payload);
    res.status(200).send(std);
    std.save().then(()=> console.log("data sucessfully saved")).catch((error)=> console.log((error)=> console.log("error", error)));
    
})
router.post("/std/login", async(req,res)=>{

    const std_info = await Student.findOne({username: req.body.username});

    console.log(std_info);

    if(!std_info){
        res.status(400).send("Inavild user");
    }
    if(std_info.password!== "12345678"){
      res.status(400).send("inavild password")
    }

    const token = UserAuthencation({
        username: std_info.username,
        password: std_info.password
    })
   res.status(200).send({message: "sucess", token});
})

router.get("/std", async(req, res)=>{
    const std = await Student.find();

    res.status(200).send(std);
})

module.exports = router;