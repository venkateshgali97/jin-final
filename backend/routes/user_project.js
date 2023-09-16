var express = require('express');
var router = express.Router();
const user_projectController = require("../models/controller/user_project")





router.post('/',user_projectController.addProject_addUser)


module.exports = router;