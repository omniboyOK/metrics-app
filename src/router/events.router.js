var express = require("express");
const { saveEventController } = require("../controller/event.controller");
var router = express.Router();

/* POST new event. */
router.post("/save", saveEventController);

module.exports = router;
