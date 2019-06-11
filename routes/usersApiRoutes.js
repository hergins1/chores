var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // GET all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // GET all Users in Household
  app.get("/api/users/:id", function(req, res) {
    db.Users.findAll({
      where: {
        HouseholdId: req.params.HouseholdId
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // USER LOGIN
  app.post("/api/user/login", function(req, res) {
    db.Users.findOne({
      where: { email: req.body.email }
    }).then(function(dbUsers) {
      res.json(dbUsers);
        if (dbUsers.password === req.body.password) {
          console.log("PASSWORD MATCH!");
          if (dbUsers.admin) {
            console.log("ADMIN");
          res.render("/indexadmin");
        } else {
          res.render("/indexuser");
        }
      }
    });
  });

  // app.get("/api/user/admin", function(req, res) {
  //   db.Users.findOne({
  //     where: { email: req.body.email }
  //   }).then(function(dbUsers) {
  //     res.json(dbUsers);
  //       if (dbUsers.admin) {
  //         res.render("/indexadmin");
  //       } else {
  //         res.render("/indexuser")
  //       }
  //   });
  // });

  // CREATE new Users
  // app.post("/api/users/create", function(req, res) {
  //   db.Users.create(req.body).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  app.post("/api/users/create", function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      req.body.password = hash;
      db.Users.create(req.body)
        .then(function() {
          // DOES NOT RENDER THE NEXT PAGE
          // res.render("/indexadmin");
        })
        .catch(function(err) {
          console.error(err);
          res.status(500).send(err);
        });
      // need to route to the user dashboard
    });
  });

  // UPDATE Users password
  app.put("/api/users/update/:id", function(req, res) {
    db.Users.update(
      {
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // DELETE Users
  app.delete("/api/users/destroy/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
