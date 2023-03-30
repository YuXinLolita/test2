const router = require('koa-router')()
const { register } = require('../controller/user')
router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })
//登录
router.post('/login', async (ctx, next) => {
    const { suername, password } = ctx.request.body
    //获取登录信息  验证登录
    const res = await login(username, password)
    if (ref) {
        //登录成功
        ctx.body = {
            errno: 0,
        }
    } else {
        ctx.body = {
            errno: -1,
            message: '登录验证失败'
        }
    }

})
//注册
router.post('/register', async (ctx, next) => {
    const userInfo = ctx.request.body
    try {
        const newUser = await register(userInfo)
        //成功
        ctx.body = {
            errno: 0,
            data: newUser
        }

    } catch (errno) {
        console.log('注册失败', errno)
        ctx.body = {
            errno: -1,
            data: '注册失败'
        }
    }
})
module.exports = router
