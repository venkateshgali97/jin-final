var express = require('express');
var router = express.Router();
const projectController = require("../models/controller/project")





router.post('/add',projectController.addProject)
router.get('/all' , projectController.getAllProjects)


module.exports = router;