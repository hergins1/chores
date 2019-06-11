var db = require("../models");

const bcrypt = require('bcrypt');


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

  // CREATE new Users
  // will we create the new user from USERAPI or HTMLROUTES?? 

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
