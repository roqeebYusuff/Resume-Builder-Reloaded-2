const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
// const options = require('./options')
// const docs = require('./docs')

const api = require("./src/api");

const app = express();

/* Open API */
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsondoc = require("swagger-jsdoc");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(morgan(":method :url :status :user-agent - :response-time ms"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", api);
app.use("/server", (req, res) => {
  res.send({
    success: true,
    message: "Server Running",
  });
});

app.get("/api", (req, res) => {
  res.send({
    success: true,
    message: "Testing",
  });
});

// This middleware informs the express application to serve our compiled React files
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.resolve(__dirname, "./client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 7000, function () {
  console.log("Server running on port " + (process.env.PORT || 7000));
});
