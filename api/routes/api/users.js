const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
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

module.exports = router;