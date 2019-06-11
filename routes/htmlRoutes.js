var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // LOGIN PAGE: WORKING
  app.get("/", function(req, res) {
    res.render("login", {layout: "access.handlebars"});
  });

  // SIGNUP PAGE: WORKING
  app.get("/signup", function(req, res) {
    res.render("signup", {layout: "access.handlebars"});
  });

  // NEW USER PAGE: WORKING
  app.get("/new-user", function(req, res) {
    res.render("newUser");
  });

  // NEW CHORE PAGE: WORKING
  app.get("/new-chore", function(req, res) {
    res.render("newChore");
  });

  // CHORES LIST PAGE: WORKING
  app.get("/chores-list", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.render("chores-list", {
        Chores: dbChores
      });
    });
  });

  // FAMILY LIST PAGE: WORKING
  app.get("/family", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.render("family", {
        Users: dbUsers
      });
    });
  });

  // ADMIN VIEW: WORKING
  app.get("/admin", function(req, res) {
    res.render("indexadmin");
  });

  // USER VIEW: WORKING
  app.get("/user", function(req, res) {
    res.render("indexuser");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

  app.post("/login", function(req, res) {
    db.Users.findOne({ where: { email: req.body.email } }).then(function(user) {
      if (!user) {
        console.log("Email not found")
        //send login error message        
        res.redirect("/login");
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, res) {
          // console.log(res)
          // console.log("successful")
          res.redirect("indexadmin")
          .catch(function (err) {
          console.error(err);
          res.status(500).send(err);
          });
        });
      }
    });
  });
};

app.post("/user/create", function(req, res) {
  
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) throw err;
    req.body.password = hash;

    db.Users.create(req.body)
    .then(function(dbUsers) {
      res.redirect("indexuser");
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send(err);
    });
  });
});