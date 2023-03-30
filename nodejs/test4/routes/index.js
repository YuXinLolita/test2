const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

//测试session
router.get('/session-test',async(ctx,next) => {
  //定义 ctx.session.viewcount 
  if(ctx.session.viewcount){
    ctx.session.viewcount = 0
  }
  ctx.session.viewcount++
ctx.body = {
  title:'session-test',
  viewcount:ctx.session.viewcount
}
})
module.exports = router
