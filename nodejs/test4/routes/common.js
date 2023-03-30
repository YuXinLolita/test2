const router = require('koa-router')()
const {Comment} = require('../db/model')
const {loginCheck} = require('../middlewares/loginCheck')
router.prefix('/api') //前置url
router.get('/list',loginCheck, async (ctx) => {
    const query = ctx.query
    console.log('query is :',query)
    const commentlist = await Comment.find().sort({_id:1})
    ctx.body =   {
        errno:0,
        data:[
        {content:'野火烧不尽，春风吹又生',name:'白居易'},
        {content:'好雨知时节，当春乃发生',name:'杜甫'},
        {content:'无可奈何花落去，似曾相识燕归来',name:'晏殊'}
        ]
    }
    
})
router.post('/create',async (ctx) => {
    const body = ctx.request.body 
    console.log('body',body)
    const {content ,name} = body
   const newComment = await Comment.create({
        content,
        username
    })
    ctx.body = {
        errot:0,
        message:'成功',
        data:newComment
    }
})
// router.post('/create', async (ctx) => {
//     ctx.body = 'hello world,api create'
// })
module.exports = router