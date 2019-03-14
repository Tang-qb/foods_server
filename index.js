const express = require('express')
const config = require('./config')
const loader = require('./loader')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS')
  next()
})

//读取静态页面
app.use(express.static('./client'))

app.post('/register', loader.get('/register'))

app.post('/login', loader.get('/login'))

app.post('/addCart', loader.get('/addCart'))

app.post('/deleteCart', loader.get('/deleteCart'))

app.post('/cart', loader.get('/cart'))

app.get('/queryAllCarousel', loader.get('/queryAllCarousel'))

app.post('/addCarousel', loader.get('/addCarousel'))

app.post('/addHome', loader.get('/addHome'))

app.post('/queryHome', loader.get('/queryHome'))

app.post('/addDetail', loader.get('/addDetail'))

app.post('/queryDetail', loader.get('/queryDetail'))

//监听端口
app.listen(config.port, () => {
  console.log('server is running')
})