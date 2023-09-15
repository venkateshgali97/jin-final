var express = require('express');
var router = express.Router();
const eventController = require("../models/controller/event")





router.post('/add',eventController.addEvent)
router.get('/allEvents', eventController.getAllEvents)
router.post('/deleteEvent/:id',eventController.deleteEvent)
router.post("/update/:id", eventController.updateEvent)



module.exports = router;
