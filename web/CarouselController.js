const carouselDao = require('../dao/CarouselDao')


const path = new Map()


const queryAllCarousel = (req, res) => {
  carouselDao.queryAllCarousel(result => {
    return res.json({status: '1', msg: '获取成功', code: 'success', data: result})
  })
}


path.set('/queryAllCarousel', queryAllCarousel)


const addCarousel = (req, res) => {
  let params = req.body.picture
  carouselDao.addCarousel(params, result => {
    return res.json({status: '1', msg: '添加成功', code: 'success'})
  })
}


path.set('/addCarousel', addCarousel)


module.exports.path = path