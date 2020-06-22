const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '206.189.178.241',
    user: 'root',
    password: '1997Kristy',
    database: 'spotify'
  });
}
