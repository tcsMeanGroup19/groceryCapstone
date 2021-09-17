let express = require("express");
let router = express.Router();
let EmployeerequestController = require("../Controllers/employeerequest.control");


router.post("/",EmployeerequestController.EmployeecreateRequest);
router.get("/",EmployeerequestController.EmployeegetAllRequests);

module.exports=router;