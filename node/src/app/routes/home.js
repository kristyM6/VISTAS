const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
  const connection = dbConnection();

  app.get("/", (req, res) => {
    res.render("home/principal");
  });
};
