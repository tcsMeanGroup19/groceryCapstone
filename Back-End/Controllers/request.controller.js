
let requestModel = require("../Models/request.model");

let createRequest = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    await requestModel.create(user);
    response.send("OK");   
}

let getAllRequests = async (request,response)=> {
    const results = await requestModel.find({});
    response.json(results);   
}

module.exports={createRequest, getAllRequests}