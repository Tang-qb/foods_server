const homeDao = require('../dao/HomeDao')

const path = new Map()


const queryHome = (req, res) => {
  let tag = req.body.tag
  if (tag) homeDao.queryHome(tag, result => {
    if (result.length == 0) return res.json({status: '-2' ,msg: '数据为空', code: 'failed'})
    else return res.json({status: '1' ,msg: '获取成功', code: 'success', data: result})
  })
  else return res.json({status: '-1' ,msg: '获取失败,请传入tag', code: 'failed'})
}

path.set('/queryHome', queryHome)


const addHome = (req, res) => {
  let title = req.body.title,
      pic = req.body.pic,
      price = req.body.price,
      person = req.body.person,
      address = req.body.address,
      goods_id = req.body.goods_id,
      tag = req.body.tag
  if (title && pic && price && person && address && goods_id && tag) homeDao.addHome(title, pic, price, person, address, goods_id, tag, result => {
    return res.json({status: '1' ,msg: '插入成功', code: 'success'})
  })
  else return res.json({status: '-1' ,msg: '插入失败,请传入所有参数', code: 'failed'})
}

path.set('/addHome', addHome)


module.exports.path = path