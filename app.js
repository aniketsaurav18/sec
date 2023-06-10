//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser')
const ejs = require("ejs");
const { setEngine } = require('crypto');
const mongoose = require('mongoose')
const encryption = require('mongoose-encryption');

const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");


const app = express();
//Load router modules 

app.use("/login" , loginRouter)
app.use("/register", registerRouter)

app.use(express.static("public"));
app.set("view engine" , 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser : true});
const userSchema = {
    email : String,
    password: String
}

const User  = new mongoose.model('User' , userSchema)


app.get("/" , (req, res)=>{
   res.render("home");
})
app.get("/login" , (req, res)=>{
    res.render("login");
 })

app.get("/register" , (req, res)=>{
    res.render("register");
 })
 app.all("/sabkuchh", (req, res)=>{
    res.send("all in one ")
 })
 








app.listen(3000, () =>{
    console.log('Server started')
})
