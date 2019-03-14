const detailDao = require('../dao/DetailDao')


const path = new Map()



const queryDetail = (req, res) => {
  let id = req.body.goods_id
  detailDao.queryDetail(id, result => {
    console.log(result)
  })
}

path.set('/queryDetail', queryDetail)

const addDetail = (req, res) => {
  let goods_id = req.body.goods_id, 
      price = req.body.price,
      title = req.body.title,
      pic = req.body.pic,
      sale = req.body.sale,
      evaluate = req.body.evaluate
  detailDao.addDetail(goods_id, price, title, pic, sale, evaluate, result => {
    console.log(result)
  })
}

path.set('/addDetail', addDetail)


module.exports.path = path