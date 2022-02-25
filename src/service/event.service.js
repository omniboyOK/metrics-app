const { DB_NAME, EVENTS_COLLECTION } = require("../constants/database");
const { client } = require("./mongo.service");

function saveEvent(event = {}) {
  client
    .db(DB_NAME)
    .collection(EVENTS_COLLECTION)
    .insertOne(event, function (err, res) {
      if (err) throw err;
    });
}

module.exports = {
  saveEvent,
};
