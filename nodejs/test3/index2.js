const http = require('http')
const server = http.createServer( (req,res) => {
    const url = req.url 
    console.log(url)
res.end('hello world')
})

server.listen(3000)
console.log('requestion is starting')