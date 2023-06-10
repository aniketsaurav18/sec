
const express = require('express');
const router = express.Router();

router.post('/register' , (req , res)=>{
    const newUser = new User({
        email : req.body.username,
        password : req.body.password
    });
    newUser.save()
    .then(() => {
      res.render("secrets");
    })
    .catch((error) => {
      console.log(error);
    });

});

module.exports = router;