/**
 * @description 连接数据库
 * @author 学习
 */

const mongoose = require('mongoose') 
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'testdb'
mongoose.connect(`${url}/${dbName}`)
const db = mongoose.connection
db.on('error' , (err) => {
    console.log('mongoose conection error', err)
})
db.once('open',() => {
    console.log('mongoose 连接成功')
})
module.exports = mongoose
