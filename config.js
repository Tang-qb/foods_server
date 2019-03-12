const fs = require('fs')

const globalConf = {}
const config = fs.readFileSync('./server.conf')

const configArr = config.toString().split('\r\n')


for (let i = 0; i < configArr.length; i++) {
  globalConf[configArr[i].split('=')[0]] = configArr[i].split('=')[1]
}


module.exports = globalConf
