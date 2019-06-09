var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // LOGIN PAGE
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // SIGNUP PAGE
  app.get("/signin", function(req, res) {
    res.render("signup");
  });

  // NEW USER PAGE
  app.get("/new-user", function(req, res) {
    res.render("newUser");
  });

  // NEW CHORE PAGE
  app.get("/new-chore", function(req, res) {
    res.render("newChore");
  });

  // CHORES LIST PAGE
  // Show all chores for family? Show all chores for certain user?
  // Who's chore is it?
  app.get("/chores-list", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.render("chores-list", {
        chores: dbChores
      });
    });
  });

  // ADMIN VIEW
  app.get("/admin", function(req, res) {
    res.render("indexadmin");
  });

  // USER VIEW
  app.get("/user", function(req, res) {
    res.render("indexuser");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.post("/login", function(req, res) {
    db.Users.findOne({ where: { email: req.body.email } }).then(function(user) {
      if (!user) {
        console.log("Email not found")
        //send login error message        
        res.redirect("/login");
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, res) {
          console.log(res)
          console.log("successful")
          // res.redirect("indexadmin");
          // .catch(function (err) {
          // console.error(err);
          // res.status(500).send(err);
          // });
        });
      }
    });
  });
};
