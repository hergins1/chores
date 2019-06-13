var db = require("../models");
// const bcrypt = require("bcrypt");

module.exports = function(app) {
  // LOGIN PAGE: WORKING
  app.get("/", function(req, res) {
    res.render("login", { layout: "access.handlebars" });
  });

  // SIGNUP PAGE: WORKING
  app.get("/signup", function(req, res) {
    res.render("signup", { layout: "access.handlebars" });
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

  // ROUTE WITH SESSION INFO
  // app.get("/chores-list", function(req, res) {
  //   db.Chores.findAll({
  //     where: { email: req.session.email }
  //   }).then(function(dbChores) {
  //     res.render("chores-list", {
  //       Chores: dbChores
  //     });
  //   });
  // });

  // FAMILY LIST PAGE: WORKING
  app.get("/family", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.render("family", {
        Users: dbUsers
      });
    });
  });

  // USER LOGIN
  app.post("/user/login", function(req, res) {
    db.Users.findOne({
      where: { email: req.body.email }
    }).then(function(dbUsers) {
      // res.json(dbUsers);
      if (dbUsers.password === req.body.password) {
        req.session.email = req.body.email;
        req.session.userId = dbUsers.userId;
        console.log("PASSWORD MATCH!");
        if (dbUsers.admin) {
          console.log("ADMIN");
          // res.render("indexadmin");
          res.redirect("/admin");
        } else {
          res.redirect("/user");
        }
      } else {
        res.status(400).end();
      }
    });
  });

  // ADMIN VIEW: WORKING
  app.get("/admin", function(req, res) {
    db.Users.findOne({
      where: { email: req.session.email }
    }).then(function(dbUsers) {
      console.log("SESSION INFORMATION: ", req.session);
      console.log("DATABASE INFORMATION: ", dbUsers.name);
      res.render("indexadmin", {
        Users: dbUsers
      });
    });
  });

  // app.get("/chores-list", function(req, res) {
  //   db.Chores.findAll({
  //     where: { email: req.session.email }
  //   }).then(function(dbChores) {
  //     res.render("chores-list", {
  //       Chores: dbChores
  //     });
  //   });
  // });

  // USER VIEW: WORKING
  app.get("/user", function(req, res) {
    db.Users.findOne({
      where: { email: req.session.email }
    }).then(function(dbUsers) {
      console.log("SESSION INFORMATION: ", req.session);
      console.log("DATABASE INFORMATION: ", dbUsers.name);
      res.render("indexuser", {
        Users: dbUsers
      });
    });
  });

  app.get("/homepage", function(req, res) {
    db.Users.findOne({
      where: { email: req.session.email }
    }).then(function(dbUsers) {
      console.log("SESSION INFORMATION: ", req.session);
      console.log("DATABASE INFORMATION: ", dbUsers.name);
      if (dbUsers.admin) {
        res.render("indexadmin", {
          Users: dbUsers
        });
      } else {
        res.render("indexuser", {
          Users: dbUsers
        });
      }
    });
  });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//   app.post("/", function(req, res) {
//     bcrypt.compare(req.body.password, hash, function(err, res) {
//       res.redirect().catch(function(err) {
//         console.error(err);
//         res.status(500).send(err);
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.post("/login", function(req, res) {
//     db.Users.findOne({ where: { username: req.body.username } }).then(function(
//       user
//     ) {
//       if (!user) {
//         res.redirect("/");
//       } else {
//       }
//     });
//   });
// };

// Load index page
// app.get("/", function (req, res) {
//   db.Example.findAll({}).then(function (dbExamples) {
//     res.render("index", {
//       msg: "Welcome!",
//       examples: dbExamples
//     });
//   });
// });

// Load example page and pass in an example by id
// app.get("/example/:id", function (req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function (
//     dbExample
//   ) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });
