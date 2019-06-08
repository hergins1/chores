var db = require("../models");

const bcrypt = require('bcrypt');


module.exports = function(app) {
  // GET all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // CREATE new Users

  app.post("/api/users", function(req, res) {
    // callback
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if (err) throw err;
      req.body.password = hash;

      db.Users.create(req.body)
      .then(function(dbUsers) {
        res.json(dbUsers);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).send(err);
      });
    });
  });

  // UPDATE Users name
  app.put("/api/users/:id", function(req, res) {
    db.Users.update(
      {
        name: req.body.name
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
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
