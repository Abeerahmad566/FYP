const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const Otp = require("../../models/otp");
const { response } = require("../../app");
router.get("/",async (req, res) => {
  console.log(req.user);
  let users = await User.find();
  return res.send(users);
});
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");
  const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
  user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.phonenumber = req.body.phonenumber;
  user.email = req.body.email;
  user.password = hashedPass;
 
  await user.save();
  let token = jwt.sign(
    { _id: user._id, name: user.firstname, },
    config.get("jwtPrivateKey")
  );
  let datatoRetuen = {
    name: user.firstname,
    email: user.email,
    token: user.token,
  };
  return res.send(datatoRetuen);
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User With given Email is not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, email: user.email, name: user.firstname },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
router.post("/email-send",async(req,res)=>{
  let data = await User.findOne({email:req.body.email});
  const responseType = {};
  if(data)
  {
    let otpcode = Math.floor((Math.random()*10000)+1);
    let otpData = new Otp({
      email:req.body.email,
      code:otpcode,
      expireIn: new Date().getTime()+300*1000
    })
    let otpResponese = await otpData.save();
    responseType.statusText = 'Success'
    //mailer(data,otpData)
    responseType.message= 'Please check your Email id';
  }
  else{
    responseType.statusText = 'Error'
    responseType.message= 'Email Id does not exist';
  }
  res.status(200).json(responseType);
});
router.post("/reset-password",async(req,res)=>{
  
  let data = await Otp.findOne({email:req.body.email,code:req.body.otpCode});
  const response={}
  if(data){
    let currentTime = new Date().getTime();
    let diff = data.expireIn - currentTime;
    if(diff<0)
    {
response.message="Code Expire"
response.statusText='error'
    }
    else{
      let user = await User.findOne({email:req.body.email});
      const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPass;
      user.save();
      response.message="Password Changed Successfully"
response.statusText='Success'
    }
  }
  else{
    response.message="Invalid Otp"
response.statusText='error'
  }
  res.status(200).json(responseType);
});


const mailer=(email,otp)=>{
  var nodemailer = require("nodemailer");
  var transport = nodemailer.createTransport({
    service:'gmail',
    port:587,
    secure:false,
    auth:{
      user:"loanprediction@gmail.com",
      pass:"123"
    }
  });
  var mailOptions = {
    from:"loanprediction@gmail.com",
    to:"",
    subject:"Reset your Password",
    text:"Hello"
  };
  transporter.sendMail(mailOptions, function(error,info){
    if(error){
      console.log(error);
    }
    else
    {
console.log("Email send:" +info.response);
    }
  });
}
module.exports = router;