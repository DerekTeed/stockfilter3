// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Load index page
    // app.get("/", function (req, res) {
    //   db.Report.findAll({}).then(function (dbExamples) {
    //     res.render("index", {
    //     });
    //   });
    // });
  
// GET route for getting all of the stocks in mysql
app.get("/api/stocks", function(req, res) {
  db.Stocks.findAll({})
    .then(function(dbStocks) {
      res.json(dbStocks);
    });
});

  // // GET route for getting all of the Stockss
  // app.get("/api/Stockss/", function(req, res) {
  //   db.Stocks.findAll({})
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });

  // // Get route for returning Stockss of a specific category
  // app.get("/api/Stockss/category/:category", function(req, res) {
  //   db.Stocks.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });

  // // Get route for retrieving a single Stocks
  // app.get("/api/Stockss/:id", function(req, res) {
  //   db.Stocks.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });

  // // Stocks route for saving a new Stocks
  // app.Stocks("/api/Stockss", function(req, res) {
  //   console.log(req.body);
  //   db.Stocks.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });

  // // DELETE route for deleting Stockss
  // app.delete("/api/Stockss/:id", function(req, res) {
  //   db.Stocks.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });

  // PUT route for updating Stockss
  // app.put("/api/Stockss", function(req, res) {
  //   db.Stocks.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbStocks) {
  //       res.json(dbStocks);
  //     });
  // });
};
