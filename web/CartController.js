const cartDao = require('../dao/CartDao')

const path = new Map()

const addCart = (req, res) => {
  let title = req.body.title,
      pic = req.body.pic,
      num = req.body.num,
      price = req.body.price,
      goods_id = req.body.goods_id,
      now_time = req.body.now_time,
      email = req.body.email
  if (!email) return res.json({status: '-1', msg: '添加购物车失败', code: 'failed'})
  cartDao.addCart(title, pic, num, price, goods_id, now_time, email, result => {
    return res.json({status: '1', msg: '添加购物车成功', code: 'success'})
  })
}

path.set('/addCart', addCart)


const deleteCart = (req, res) => {
  let goods_id = req.body.goods_id,
      email = req.body.email
  if (!goods_id || !email) return res.json({status: '-1', msg: '请输入邮箱或商品id', code: 'failed'})
  else cartDao.deleteCart(goods_id, email, result => {
    return res.json({status: '1', msg: '删除购物车成功', code: 'success'})
  })
}

path.set('/deleteCart', deleteCart)


const cart = (req, res) => {
  cartDao.queryAllCart(req.body.email, result => {
    if (result.length == 0) {
      return res.json({status: '-1', msg: '购物车为空', code: 'failed'})
    }else {
      return res.json({status: '1', msg: '查询成功', code: 'success', data: result})
    }
  })
}

path.set('/cart', cart)

module.exports.path = path