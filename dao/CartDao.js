const dbutil = require('../dao/DBUtil')

const addCart = (title, pic, num, price, goods_id, time, success) => {
  let sql = 'insert into cart (`title`, `pic`, `num`, `price`, `goods_id`, `now_time`) values (?,?,?,?,?,?)'
  let params = [title, pic, num, price, goods_id, time]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}


const deleteCart = (id, success) => {
  let sql = 'delete from cart where goods_id = ?'
  let params = [id]

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })
  connection.end()
}

const queryAllCart = success => {
  let sql = 'select * from cart'

  let connection = dbutil.createConnection()
  connection.connect()
  connection.query(sql, (err, result) => {
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