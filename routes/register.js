const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.get("/register", (req, res, next) => {
  res.render("register");
});

router.post("/register", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => {
      res.render("secrets");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
