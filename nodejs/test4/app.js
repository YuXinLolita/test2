const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const loginCheck = require('./middlewares/loginCheck')

const index = require('./routes/index')
const users = require('./routes/users')
const common = require('./routes/common')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
//打印当前请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
//模拟登录
// app.use(async (ctx,next) => {
//   const query = ctx.query
//   if(query.users === 'zhangsan'){
//     await next()
//   }else{
//     ctx.body='请登录'
//   }
// })
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(common.routes(),common.allowedMethods())

app.keys = ['123456781qaz2wsx']  //密钥
app.use(session({
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000
  }
}))
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
