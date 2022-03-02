var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
var userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phonenumber:Number,
  password: String,
});
var User = mongoose.model("User",userSchema);
function validateUser(data) {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(10).required(),
    lastname: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().min(3).max(10).required(),
    phonenumber:Joi.number().min(11).max(11).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
function validateUserLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports={User,validateUser,validateUserLogin}