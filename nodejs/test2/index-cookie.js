const http = require('http')
const { Server } = require('https')
const server = http.createServer((req,res) => {
    res.setHeader('Set-Cookie','hobby=read')
   // console.log(req.headers.cookie)
   //结构化
  const cookiestr = req.headers.cookie
  const query = {}
  cookiestr.split(';').forEach( (item) => {
 const  document = item.trim().split('=')
        const key = document[0]
        const value = document[1]
        query[key] = value
  
//   cookiestr.split(';').forEach( (item) => {
//     item.split('=').forEach((document) => {
//         const key = document[0]
//         const value = document[1]
//         query[key] = value
//     })

  })
  console.log(`cookie is ${cookiestr    }`)
  console.log(query)
   res.end('send message success')
})
server.listen(3000)
console.log('发送成功')