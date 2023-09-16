var express = require('express');
var router = express.Router();
const holidaysController = require("../models/controller/holidays")






router.get("/",holidaysController.getAllHolidays)

module.exports = router;