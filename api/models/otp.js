var mongoose = require("mongoose");

var otpSchema = mongoose.Schema({
  email: String,
 code:String,
 expireIn:Number
},{
    timestamps:true
});
var Otp = mongoose.model("Otp",otpSchema);


module.exports=Otp