const { saveEvent } = require("../service/event.service");

function saveEventController(req, res) {
  try {
    const { event } = req.body;
    await saveEvent(event);
    return res.status(200).json();
  } catch (e) {
    throw e;
  }
}
