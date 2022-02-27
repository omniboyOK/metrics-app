const { saveEvent } = require("../service/event.service");

async function saveEventController(req, res, next) {
  const event = req.body;

  try {
    await saveEvent(event);
    return res.status(200).json();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

module.exports = { saveEventController };
