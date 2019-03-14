const dbutil = require('./DBUtil')


const queryAllCarousel = (success) => {
  let sql = 'select * from carousel'

  let connection = dbutil.createConnection()
  connection.connect()

  connection.query(sql, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}


const addCarousel = (picture, success) => {
  let sql = 'insert into carousel (`picture`) values (?)'
  let params = [...picture]
  let len = params.length

  let connection = dbutil.createConnection()
  connection.connect()

  if (len > 0) for (let i = 0; i < len; i++) {
    connection.query(sql, params[i], (err, result) => {
      if (err == null) success(result)
      else throw new Error(err)
    })
  }

  connection.end()
}


module.exports = {
  queryAllCarousel,
  addCarousel
}