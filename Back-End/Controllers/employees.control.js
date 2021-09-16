let employeesModel = require("../Models/employees.model");


let getAllemployeesDetails = (request,response)=> {

    employeesModel.find({},(err,data)=> {
        if(!err){
            response.send(data);
        }else {
             response.send(err);
        }
    })

}

let storedProductInfo = (request,response)=> {
    let employees = request.body;

    employeesModel.insertMany(employees,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

let deleteItem = (request,response)=> {
    let eid = request.params.eid;
    employeesModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}
module.exports= {storedProductInfo,deleteItem,getAllemployeesDetails}