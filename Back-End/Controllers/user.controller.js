let userModel = require("../Models/user.model");

// create all the database functions that I'll need

// editing the profile 
// they have to edit every part, identified by userID
let editProfile = (request, response)=>{
    let user = request.body;    
    userModel.updateMany({userID:user.userID},
        {$set:
        {password:user.password,
        address:user.address,
        phoneNum:user.phoneNum,
        emailID:user.emailID}},(err,result)=>{
            if(!err){
                response.send(result);
            }else{
                response.send(err);
            }
        });
}

// showing funds, based on user ID
let showFunds = (request, response) =>{
    let f = request.body;
    userModel.find({userID:f.userID},{_id:0,funds:1},(err,data)=>{
        if(!err){
            response.send(data);
        }else{
            response.send(err);
        }
    });
}

// adding funds
let addFunds = (request, response)=>{
    let f = request.body;
    userModel.updateOne({userID:f.userID},{$set:{funds:f.funds}},(err,result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    });
}

// exporting functions
module.exports = {editProfile, showFunds, addFunds}