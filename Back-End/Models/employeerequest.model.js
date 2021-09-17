let mongoose = require("mongoose");

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    employeeusername:{type:String},
    Erequest:{type:String}
});

let EmployeeRequestSchema = mongoose.model("Employeerequest", requestSchema);

module.exports = EmployeeRequestSchema;