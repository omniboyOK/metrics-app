var express = require("express");
const {
  saveEventController,
  getActiveProjectsController,
  getEventsByProjectController,
} = require("../controller/event.controller");
var router = express.Router();

/* GET last week events from project */
router.get("/", getEventsByProjectController);

/* GET all active projects */
router.get("/projects", getActiveProjectsController);

/* POST new event. */
router.post("/save", saveEventController);

module.exports = router;
