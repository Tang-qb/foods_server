const dbutil = require('../dao/DBUtil')

const addUser = (name, email, phone, password, date, success) => {
  let sql = 'insert into user (`userName`, `email`, `phone`, `password`, `now_time`) values (?,?,?,?,?)'
  let params = [name, email, phone, password, date]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else console.log(err)
  })
  connection.end()
}


const queryUser = (email, success) => {
  let sql = 'select * from user where email = ?'
  let params = [email]
  
  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}


const login = (email, password, success) => {
  let sql = 'select * from user where email = ? & password = ?'
  let params = [email, password]
  
  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}


module.exports = {
  addUser,
  queryUser,
  login
}

