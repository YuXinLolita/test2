//身份验证的中间件
async function loginCheck(ctx ,next){
    const session = ctx.session || {}
    const userInfo = session.userInfo
    if(userInfo && userInfo.username){
        //成功
        await next()
        return
    }
    ctx.body ={
        errno : -1 ,
        message:'用户尚未登录'
    }
}
module.exports = loginCheck