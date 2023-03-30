//连接mongodb数据库
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'comment3'
//开始连接
mongoose.connect( `${url}/${dbName}`
)
//获取连接对象
const  conn = mongoose.connection
conn.on('error', (err) => {
    console.log('mongodb 连接出错，',err)
})
module.exports = mongoose