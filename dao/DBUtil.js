const mysql = require('mysql')

const createConnection = () => {
  let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'tqb123',
    database: 'foods'
  })
  return connection
}

module.exports = {
  createConnection
}
