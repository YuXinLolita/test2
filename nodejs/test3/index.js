const http = require('http')
// const { type } = require('os')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")  //出现中文乱码解决方案
    const url = req.url
    const method = req.method
    const path = url.split('?')[0]
    const querystr = url.split('?')[1]
    console.log(method)
    console.log('测试')
    // console.log(revstr)
    // const query = {}
    // if(queryStr) {
    //     queryStr.split('&').forEach((item) => {
    //         const key = item.split('=')[0]
    //         const value = item.split('=')[1]  //会转换成string，调用 toString()方法
    //         query[key] = value
    //     })
    // }
    // console.log('query is',query)
    const query = querystring.parse(querystr)
    console.log('query is', query)
    const result = [
        { name: 'tom', },
        { age: 18 },
        { sex: 'man' }
    ]
    if (path === '/api/list' && method === 'GET') {
        if (query.fliterTitleType === '1')   //注：会强迫转化成string
        {
            // let bodyStr = ''
            // req.on('data',(chunk)=>{
            //     bodyStr += chunk.toString()
            // })
            // req.on('end',()=> {
            //     console.log(bodyStr)
            // })
            // let restype = req.headers['content-type']
            // if(restype === 'application/json'){
            //     JSON.parse(bodystr)
            //     console.log(bodyStr)
            // }
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify(result))
            // res.end('this is list router,all，测试')
        }
        if (query.fliterTitleType === '2')
        res.writeHead(200,{'content-type':'application/json'})
           // res.end('this is list router,onlyme，测试')
    }
    // else {

        // res.writeHead(404,{'content-type':'text/plain'})
        // res.end('404,errno number')
    // }
    if (path === '/api/create' && method === 'POST') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end('this is create router,测试')
    }

    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.end(`
        <DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>404 not fount</title>
        </head>
        <body>
        <h1>404 NOT FOUND</h1>
        <p> 404 未找到</p>
        </body>
        </html>
        `)
        // res.writeHead(404,{'content-type':'text/plain'})
        // res.end('404')
    }
})

server.listen(3000)