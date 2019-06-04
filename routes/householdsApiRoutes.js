var db = require("../models");

module.exports = function(app) {
  // GET all Households
  app.get("/api/households", function(req, res) {
    db.Households.findAll({}).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });
};
