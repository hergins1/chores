var db = require("../models");

module.exports = function(app) {
  // GET all Households
  app.get("/api/households", function(req, res) {
    db.Households.findAll({}).then(function(dbHouseholds) {
      res.json(dbHouseholds);
    });
  });

  // CHECK HOUSEHOLD LOGIN INFORMATION
  app.post("/api/households/login", function(req, res) {
    db.Households.findOne({
      where: { email: req.body.email }
    }).then(function(dbHouseholds) {
      res.json(dbHouseholds);
      if (dbHouseholds.email === req.body.email) {
        if (dbHouseholds.password === req.body.password) {
          console.log("PASSWORD MATCH!");
        }
        console.log("EMAIL MATCH!");
      }
    });
  });

  // CREATE new Households
  app.post("/api/households/create", function(req, res) {
    console.log(req);
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
