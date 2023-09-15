var express = require('express');
var router = express.Router();
const projectController = require("../models/controller/project")





router.post('/add',projectController.addProject)


module.exports = router;