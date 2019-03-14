const userDao = require('../dao/UserDao')
const util = require('../util/util')
const bcrypt = require('bcrypt')

const path = new Map()

const register = (req, res) => {
  userDao.queryUser(req.body.email, result => {
    if (result.length === 0) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err
          let password = hash
          userDao.addUser(util.getName(), req.body.email, util.getPhone(), password, util.getNow(), result => {
            return res.json({
              status: '1',
              msg: '注册成功',
              code: 'success'
            })
          })
        })
      }) 
    }else{
      return res.json({status: '-1', msg: '该邮箱已被注册,请更换邮箱', code: 'failed'})
    }
  })
}

path.set('/register', register)


const login = (req, res) => {
  userDao.login(req.body.email, req.body.password, data => {
    userDao.queryUser(req.body.email, result => {
      if (result.length == 0) {
        return res.json({status: '-1', msg: '邮箱不存在, 请重新输入!', code: 'failed'})
      }else if (result.length !== 0) {
        let password = result[0].password
        bcrypt.compare(req.body.password, password)
              .then(isMatch => {
                if (!isMatch) {
                  return res.json({status: '-2', msg: '密码错误', code: 'failed'})
                }else{
                  return res.json({status: '1', msg: '登录成功', code: 'success', user: result[0]})
                }
              })
      }
    })
  })
}

path.set('/login', login)


module.exports.path = path