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

module.exports = {
  saveEvent,
};
