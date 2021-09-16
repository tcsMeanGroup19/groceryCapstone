let express = require("express");
// create the router reference to help
// route to controller function based upon sub path
let router=express.Router();
let productController = require("../Controllers/product.control");

// ex template: 
// router.post(".../pathNameHere", productController.functionNameHere);
router.delete("/deleteItem/:pid",productController.deleteItem);
router.get("/getProducts",productController.getAllproductsDetails);
router.post("/storeProduct",productController.storedProductInfo);
router.put("/updateProduct",productController.updateProduct);

module.exports=router;