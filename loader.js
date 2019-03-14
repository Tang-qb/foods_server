const fs = require('fs')
const globalConf = require('./config')


const controllerSet = []
const pathMap = new Map()

const files = fs.readdirSync(globalConf['web_path'])

for (let i = 0; i < files.length; i++) {
  let temp = require('./' + globalConf['web_path'] + '/' + files[i])
  if (temp.path) {
    for (let [key, value] of temp.path){
      if (pathMap.get(key) == null) pathMap.set(key, value)
      else throw new Error ('url path异常, url:' + key)
    }
    controllerSet.push(temp)
  }
}


module.exports = pathMap