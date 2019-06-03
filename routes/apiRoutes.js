var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/households/", function(req, res) {
    db.Households.findAll({}).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });

  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/chores", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  app.get("/api/chores/:id", function(req, res) {
    db.Chores.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  app.get("/api/chores/completed/", function(req, res) {
    db.Chores.findAll({
      where: {
        completed: true
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
