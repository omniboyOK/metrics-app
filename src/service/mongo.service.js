const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URL;

const client = new MongoClient(url, { useUnifiedTopology: true });

function initConnection(callback = () => {}) {
  client.connect(function (err) {
    if (err) throw err;
    console.log("Connected to db Succesfully");
    try {
      callback();
    } catch (e) {
      throw e;
    }
  });
}

module.exports = {
  client,
  initConnection,
};
