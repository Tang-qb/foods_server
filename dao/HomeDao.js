const dbutil = require('./DBUtil')


const addHome = (title, pic, price, person, address, goods_id, tag, success) => {
  let sql = 'insert into home (`title`, `pic`, `price`, `person`, `address`, `goods_id`, `tag`) values (?,?,?,?,?,?,?)'
  let params = [title, pic, price, person, address, goods_id, tag]

  let connection = dbutil.createConnection()
  connection.connect()

  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}

const queryHome = (tag, success) => {
  let sql = 'select * from home where tag = ?'
  let params = [tag]

  let connection = dbutil.createConnection()
  connection.connect()

  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}


module.exports = {
  queryHome,
  addHome
}