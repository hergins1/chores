var db = require("../models");

module.exports = function(app) {
  // GET all Photos
  app.get("/api/photos", function(req, res) {
    db.Photos.findAll({}).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // CREATE new Photos
  app.post("/api/photos", function(req, res) {
    db.Photos.create(req.body).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // DELETE Photos
  app.delete("/api/photos/:id", function(req, res) {
    db.Photos.destroy({ where: { id: req.params.id } }).then(function(
      dbPhotos
    ) {
      res.json(dbPhotos);
    });
  });
};
