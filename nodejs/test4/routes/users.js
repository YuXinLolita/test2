const router = require('koa-router')()
const {User} = require('../db/model')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
//登录一般使用post请求
router.get('.login',async (ctx,next) => {
  const {username,password} = ctx.query  //get请求 用query
  //const {username,password} = ctx.request.body //post请求
  const user = await User.findOne({
    username,
    password
  })
  if(user != null){
    //成功 设置session
    ctx.session.userInfo = user
    ctx.body = {
      errno:0,
      data:user
    }
  }else {
    //登录失败
    ctx.body = {
      errno:-1,
    message:'用户名或密码错误'
    }

  }
})
//模拟登录
router.get('/login-mock',async (ctx,next)=>{
  let str = ''
  const query = ctx.query //url参数
  if(query.username) {
    //模拟登录成功
    ctx.session.userInfo = {
      username:query.username
    }
    str = 'login ok'
  }
  str = 'login faild'
  //失败,不用处理session
  ctx.body = 'login mock'
})
//模拟登录验证
router.get('/login-check-mock',async (ctx,next)=>{
  ctx.body = ctx.session.useinfo || {}
})
module.exports = router
 