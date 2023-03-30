const Koa = require('koa')
const app =new Koa()
app.use(async (ctx,next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})
app.use(async (ctx,next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time',`${ms}ms`)
})
app.use(async (ctx,next) => {
    ctx.body='乱花渐欲迷人眼，浅草才能没马蹄'
}) 

app.listen(3000)
console.log('koa2 is listen host 3000')