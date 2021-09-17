
let EmployeerequestModel = require("../Models/employeerequest.model");

let EmployeecreateRequest = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    await EmployeerequestModel.create(user);
    response.send("OK");   
}

let EmployeegetAllRequests = async (request,response)=> {
    const results = await EmployeerequestModel.find({});
    response.json(results);   
}

module.exports={EmployeecreateRequest, EmployeegetAllRequests}