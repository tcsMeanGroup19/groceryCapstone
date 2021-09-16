let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    userID:{type:String},
    password:{type:String},
    userDOB:{type:String},
    address:{type:String},
    phoneNum:{type:String},
    emailID:{type:String},
    funds:{type:String}
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;