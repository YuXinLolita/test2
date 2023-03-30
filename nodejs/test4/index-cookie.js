const Koa = require('koa')
const app =new Koa()
app.use((ctx) => {
    //cookie & session
    const SESSION_DATA = {
        123 : { username:'小欣',
        age:8,
        sex:'females'},
       456: {
        username:'蓁蓁',
        age:9,
        sex:'females'
        },
        789:{
            username:'素素',
        age:10,
        sex:'females'
        }
    
    }
    
    //ctx.cookies.set('care','vorv')
    //console.log( `cookies is ${ctx.cookies.get('care')}`)
    ctx.cookies.set('userId',123)
    const userId = ctx.cookies.get('userId')
    const userInfo = SESSION_DATA[userId]
    ctx.body=(`cookie test by koa2 --- ${userInfo.username}`)
  //  ctx.body = ''   //ctx.body = 'ctx.body is not a function'
})
app.listen(3000)