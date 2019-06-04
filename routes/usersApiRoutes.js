var db = require("../models");

module.exports = function(app) {
  // GET all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // CREATE new Users
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
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

  // router.put(‘/book/:bookId’, function (req, res, next) {
  //   Book.update(
  //     {title: req.body.title},
  //     {where: req.params.bookId}
  //   )
  //   .then(function(rowsUpdated) {
  //     res.json(rowsUpdated)
  //   })
  //   .catch(next)
  //  })

  // DELETE Users
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
