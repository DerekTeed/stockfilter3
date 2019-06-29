"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

if (!global.hasOwnProperty("models")) {
  var Sequelize = require("sequelize"),
    sequelize = null;
  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres         database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
      {
        dialect: "postgres",
        protocol: "postgres",
        port: 3306,
        host: "<heroku host>",
        logging: true //false
      });
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize("postgres://<username>:<password>@<host>:  <port>/<database>",
      {
        dialect: "postgres"
      }
    );
  }
  global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: sequelize.import(__dirname + "/user"),
    Stocks: sequelize.import(__dirname + "/stocks")
    // add your other models here
  };
}
module.exports = global.models;

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function (file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
