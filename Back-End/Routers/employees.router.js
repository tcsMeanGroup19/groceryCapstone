let express = require("express");
// create the router reference to help
// route to controller function based upon sub path
let router=express.Router();
let employeesController = require("../Controllers/employees.control");

// ex template: 
// router.post(".../pathNameHere", productController.functionNameHere);
router.delete("/deleteItem/:eid",employeesController.deleteItem);
router.get("/getProducts",employeesController.getAllemployeesDetails);
router.post("/storeProduct",employeesController.storedProductInfo);


module.exports=router;