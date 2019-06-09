const db = require("../models");
const bcrypt = require('bcrypt');


module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.post("/register", function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      req.body.password = hash;

      db.Users.create(req.body)
        .then(function(dbUsers) {
          res.render("/dashboard");
        })
        .catch(function(err) {
          console.error(err);
          res.status(500).send(err);
        });
        // need to route to the user dashboard
    });
  });
  app.post("/", function(req, res) {
    bcrypt.compare(req.body.password, hash, function(err, res) {
            
      res.redirect()
        .catch(function(err) {
          console.error(err);
          res.status(500).send(err);
        });
    });
  });

  // Load example page and pass in an example by id
//   app.post("/login", function (req, res) {

//     db.Users.findOne({ where: { username: req.body.username } })
//     .then(function (user) {
//       if (!user) {
//          res.redirect('/');
//       }
//       else{

//       }
//   });

//   // Render 404 page for any unmatched routes

// };
