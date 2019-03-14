const dbutil = require('../dao/DBUtil')

const addCart = (title, pic, num, price, goods_id, time, email, success) => {
  let sql = 'insert into cart (`title`, `pic`, `num`, `price`, `goods_id`, `now_time`, `email`) values (?,?,?,?,?,?,?)'
  let params = [title, pic, num, price, goods_id, time, email]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}


const deleteCart = (id, email, success) => {
  let sql = 'delete from cart where goods_id = ? and email = ?'
  let params = [id, email]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}

const queryAllCart = (email, success) => {
  let sql = 'select * from cart where email = ?'
  let params = [email]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}


module.exports = {
  addCart,
  deleteCart,
  queryAllCart
}