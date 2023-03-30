const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'comment2'
mongoose.connect(`${url}/${dbName}`)
const conn = mongoose.connection
conn.on('error', (err) => {
    console.error('error failed',err)
})

module.exports = mongoose