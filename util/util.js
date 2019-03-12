const getName = () => {
  return ('用户' + Math.floor(Math.random() * 1000000).toString())
}
const writeRes = (status, msg, data) => {
  return JSON.stringify(status, msg, data)
}
const getNow = () => {
  return parseInt(Date.now() / 1000)
}

const getPhone = () => {
  let arr = new Array("139","138","137","136","135","134","159","158","157","150","151","152","188","187","182","183","184","178","130","131","132","156","155","186","185","176","133","153","189","180","181","177")
  let len = Math.floor(Math.random() * 32)
  let tail = Math.floor(Math.random() * 100000000)
  return arr[len] + tail
}


module.exports = {
  getName,
  writeRes,
  getNow,
  getPhone
}