const {
  saveEvent,
  getAllEventsByProject,
  getAllActiveProjects,
} = require("../service/event.service");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns Express http response
 */
async function saveEventController(req, res, next) {
  const event = req.body;

  if (!event) {
    return res.status(400).json({ status: 400, message: "Missing event" });
  }

  try {
    await saveEvent(event);
    return res.status(200).json();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns All active projects with their total event count
 */
async function getActiveProjectsController(req, res, next) {
  try {
    const result = await getAllActiveProjects();
    return res.status(200).json({ result });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns All events from last 7 days by project
 */
async function getEventsByProjectController(req, res, next) {
  const { project } = req.query;

  if (!project) {
    return res
      .status(400)
      .json({ message: "missing project parameter", result: [] });
  }

  try {
    const result = await getAllEventsByProject(project);
    return res.status(200).json({ result });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

module.exports = {
  saveEventController,
  getActiveProjectsController,
  getEventsByProjectController,
};
