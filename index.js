const express = require('express')
const config = require('./config')
const loader = require('./loader')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//读取静态页面
app.use(express.static('./client'))

app.post('/register', loader.get('/register'))

app.post('/login', loader.get('/login'))

app.post('/addCart', loader.get('/addCart'))

app.post('/deleteCart', loader.get('/deleteCart'))

app.get('/cart', loader.get('/cart'))


//监听端口
app.listen(config.port, () => {
  console.log('server is running')
})