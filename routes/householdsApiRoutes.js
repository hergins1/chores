var db = require("../models");

module.exports = function(app) {
  // GET all Households
  app.get("/api/households", function(req, res) {
    db.Households.findAll({}).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });

  // CREATE new Households
  app.post("/api/households", function(req, res) {
    db.Households.create(req.body).then(function(dbHouseholds) {
      res.json(dbHouseholds);
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
};
