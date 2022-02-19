var express = require('express');
const User = require("../models/user");
const bcrypt = require("bcryptjs");
var router = express.Router();


/* GET home page. */
router.get("/login", function (req, res, next) {
  return res.render("Site/login");
});
router.post("/login", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.redirect("/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    req.flash("success", "Logged in Successfully");
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
});
router.get("/register", function (req, res, next) {
  return res.render("Site/register");
});
router.get("/logout", async (req, res) => {
  req.session.user = null;
  console.log("session clear");
  return res.redirect("/login");
});
router.post("/register", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    req.flash("danger", "User with given email already registered");
    return res.redirect("/register");
  }
  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  return res.redirect("/login");
});

router.get("/", async function (req, res, next) {
  //let users = await User.find();
  return res.render("Site/homepage", {
    pagetitle: "Awesome users",
    //users,
  });
});

module.exports = router;
