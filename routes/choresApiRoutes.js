var db = require("../models");

module.exports = function(app) {
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

  // CREATE new Chores
  app.post("/api/chores", function(req, res) {
    db.Chores.create(req.body).then(function(dbChores) {
      res.json(dbChores);
    });
  });

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

  // DELETE Chores
  app.delete("/api/chores/:id", function(req, res) {
    db.Chores.destroy({ where: { id: req.params.id } }).then(function(
      dbChores
    ) {
      res.json(dbChores);
    });
  });
};
