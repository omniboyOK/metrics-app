const { DB_NAME, EVENTS_COLLECTION } = require("../constants/database");
const { eventFabric } = require("../helper/events.helper");
const { client } = require("./mongo.service");

async function saveEvent(event = {}) {
  const newEvent = eventFabric(event);
  try {
    await client.db(DB_NAME).collection(EVENTS_COLLECTION).insertOne(newEvent);
  } catch (e) {
    throw e;
  }
}

/**
 *
 * @returns All events from last 7 days grouped by event name
 */
async function getAllEventsByProject(project) {
  let d = new Date();
  d.setDate(d.getDate() - 7);

  try {
    const result = await client
      .db(DB_NAME)
      .collection(EVENTS_COLLECTION)
      .aggregate([
        {
          $match: {
            date: {
              $gte: d,
            },
            project: { $eq: project },
          },
        },
        {
          $project: {
            event: true,
            date: {
              $dateToString: { format: "%Y-%m-%d", date: "$date" },
            },
          },
        },
        {
          $group: {
            _id: {
              date: "$date",
              event: "$event",
            },
            total: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: "$_id.event",
            events: {
              $push: {
                date: "$_id.date",
                count: "$total",
              },
            },
          },
        },
        {
          $project: {
            _id: false,
            name: "$_id",
            events: true,
          },
        },
      ])
      .toArray();

    return result;
  } catch (e) {
    throw e;
  }
}

/**
 *
 * @returns All projects active projects in the last month
 */
async function getAllActiveProjects() {
  let d = new Date();
  d.setDate(d.getDate() - 30);

  try {
    const result = await client
      .db(DB_NAME)
      .collection(EVENTS_COLLECTION)
      .aggregate([
        {
          $match: {
            date: {
              $gte: d,
            },
          },
        },
        {
          $project: {
            project: true,
          },
        },
        {
          $group: {
            _id: "$project",
            total: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: false,
            project: "$_id",
            total: true,
          },
        },
      ])
      .toArray();

    return result;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  saveEvent,
  getAllEventsByProject,
  getAllActiveProjects,
};
