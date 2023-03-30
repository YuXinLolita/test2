const http =require('http')
const a = undefined
const server = http.createServer((req,res) => {
    const url = req.url //'./index.html?a=10'
    const path = url.split('?')[0] //'/index.html'
    debugger
    res.end(path+123)
    a()
})

server.listen(3000)
//npm node 包管理器
console.log('node starting ***')