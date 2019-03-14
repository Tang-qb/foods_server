const dbutil = require('./DBUtil')

const queryDetail = (id, success) => {
  let sql = 'select * from detail inner join detail_picture on detail.goods_id == detail_picture.goods_id'
  let params = [id]

  let connection = dbutil.createConnection()
  connection.connect()

  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}


const addDetail = (goods_id, title, price, pic, sale, evaluate, success) => {
  let sql = 'insert into detail (`goods_id`, `title`, `price`, `pic`, `sale`, `evaluate`) values (?,?,?,?,?,?)'
  let params = [goods_id, title, price, pic, sale, evaluate]

  let connection = dbutil.createConnection()
  connection.connect()

  connection.query(sql, params, (err, result) => {
    if (err == null) success(result)
    else throw new Error(err)
  })

  connection.end()
}

module.exports = {
  queryDetail,
  addDetail
}