var db = require("../models");

module.exports = function(app) {
  // GET all Households
  app.get("/api/households", function(req, res) {
    db.Households.findAll({}).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });

  // GET all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // GET all Chores
  app.get("/api/chores", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // GET specific Chore
  app.get("/api/chores/:id", function(req, res) {
    db.Chores.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // GET completed Chores
  app.get("/api/chores/completed", function(req, res) {
    db.Chores.findAll({
      where: {
        completed: true
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // CREATE new Households
  app.post("/api/households", function(req, res) {
    db.Households.create(req.body).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });

  // CREATE new Users
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // CREATE new Chores
  app.post("/api/chores", function(req, res) {
    db.Chores.create(req.body).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // UPDATE Users

  // UPDATE Chores
  app.put("/api/chores", function(req, res) {
    db.Chores.update(req.body.completed, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE Households
  app.delete("/api/households/:id", function(req, res) {
    db.Households.destroy({ where: { id: req.params.id } }).then(function(
      dbHouseholds
    ) {
      res.json(dbHouseholds);
    });
  });

  // DELETE Users
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(
      dbUsers
    ) {
      res.json(dbUsers);
    });
  });

  // DELETE Chores
  app.delete("/api/chores/:id", function(req, res) {
    db.Chores.destroy({ where: { id: req.params.id } }).then(function(
      dbChores
    ) {
      res.json(dbChores);
    });
  });
};
