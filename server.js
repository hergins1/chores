require("dotenv").config();
<<<<<<< HEAD
var express = require("express");
var exphbs = require("express-handlebars");
<<<<<<< HEAD
// const bodyParser = require("body-parser");
=======
=======
const express = require("express");
const exphbs = require("express-handlebars");
>>>>>>> e8f09724ef7c3a504049b6fc10d9b677cf413b03
const bcrypt = require("bcrypt");
const session = require('express-session')


>>>>>>> 5f82a882eaed100efc40ed9e0ed2bbac0e2ec4ee

const db = require("./models");

const app = express();
let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
<<<<<<< HEAD
// app.use(bodyParser.json());
=======
app.use(session({
  secret: "32lkj3iii4jj4i208as"
}));
>>>>>>> e9ae8466a179da4ca60b1fdfc19c6b401bcfa9e1

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/choresApiRoutes")(app);
require("./routes/householdsApiRoutes")(app);
require("./routes/usersApiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;