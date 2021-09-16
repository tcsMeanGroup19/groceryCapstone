let express = require("express");
let router = express.Router();
let requestController = require("../Controllers/request.controller");


router.post("/",requestController.createRequest);
router.get("/",requestController.getAllRequests);

module.exports=router;