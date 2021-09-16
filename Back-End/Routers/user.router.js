let expreess = require("express");
let router = express.Router();
let userController = require("../Controllers/user.controller");

// define routes
router.put("/editProfile",userController.editProfile);
router.get("/showFunds",userController.showFunds);
router.put("/addFunds",userController.addFunds);

module.exports = router;
