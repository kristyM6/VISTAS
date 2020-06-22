const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view3', (req, res) => {
    connection.query('SELECT * FROM spotify.Roles_de_Usuario', (err, result) => {
      res.render('views/view3', {
        view3: result
      });
    });
  });

};
