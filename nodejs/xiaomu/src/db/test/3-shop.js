/**
 * @description 商店数据操作
 * @author 欣欣
 */
const shop = require('../../models/Shop')
const Shop = require('../../models/Shop')
!(async()=> {
    //创建两个商店
    //沃尔玛商店
    // /images/shop/sam.jpg
    // await Shop.create({
    //     name:'沃尔玛',
    //     imgUrl:'/images/shop/wmt.jpg',
    //     sales:1000,
    //     expressLimit: 0 ,
    //     expressPrice: 5,
    //     slogan:'VIP尊享满89元减4元运费券'
    // })
    // await Shop.create({
    //     name:'山姆会员商店',
    //     imgUrl:'/images/shop/sam.jpg',
    //     expressLimit: 0 ,
    //     expressPrice: 5,
    //     slogan:'VIP尊享满89元减10元运费券'
    // })

    //附近热门商店
    // const shopList = await Shop.find().sort({_id:-1})
    // console.log('find list => ',shopList)
    //获取商店详情
    const id = '64268416d3c6ad2a1662bf15'
    const shop = await Shop.findById(id)
    console.log('findbyid =>',shop)
})()