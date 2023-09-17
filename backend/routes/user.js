var express = require('express');
var router = express.Router();
const userController = require("../models/controller/user")






router.post('/add',userController.addUser)
router.get("/allusers",userController.getAllUsers)
router.post("/deleteUser/:id", userController.deleteUser)
router.post('/update/:id', userController.updateUser)
router.get("/:id", userController.loginUser)
module.exports = router;
