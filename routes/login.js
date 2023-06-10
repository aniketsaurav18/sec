const express = require('express');
const router = express.Router();


router.post("/login" , (req , res)=>{
    const username =  req.body.username;
    const password = req.body.password;

    User.findOne({ email : username})
    .then(foundUser =>{
        if(foundUser){
            if(foundUser.password == password){
                res.render('secrets')
            }
        }
    })
    .catch(error  =>{
        console.log(error);

    })

    

});

module.exports = router ;