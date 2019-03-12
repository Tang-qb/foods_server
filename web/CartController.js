const cartDao = require('../dao/CartDao')

const path = new Map()

const addCart = (req, res) => {
  let title = req.body.title,
      pic = req.body.pic,
      num = req.body.num,
      price = req.body.price,
      goods_id = req.body.goods_id,
      now_time = req.body.now_time
  cartDao.addCart(title, pic, num, price, goods_id, now_time, result => {
    return res.json({status: '1', msg: '添加购物车成功', code: 'success'})
  })
}

path.set('/addCart', addCart)


const deleteCart = (req, res) => {
  let goods_id = req.body.goods_id
  cartDao.deleteCart(goods_id, result => {
    return res.json({status: '1', msg: '删除购物车成功', code: 'success'})
  })
}

path.set('/deleteCart', deleteCart)


const cart = (req, res) => {
  cartDao.queryAllCart(result => {
    console.log(result)
  })
}

path.set('/cart', cart)

module.exports.path = path