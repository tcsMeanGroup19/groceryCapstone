
const mongoose = require("mongoose");
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    _id: Number,
    employeename: String,
    password: String

    
});

module.exports = mongoose.model("employees", EmployeeSchema);