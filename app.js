require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// routers
const indexRouter = require("./src/router/index.router");
const eventsRouter = require("./src/router/events.router");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/events", eventsRouter);

app.get("*", function (req, res) {
  res.render("index", { title: "Dashboard" });
});

module.exports = app;
