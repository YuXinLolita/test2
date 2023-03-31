/**
 * @description 
 * @author 欣欣
 */

const Product = require('../../models/Products')
!(async () => {
    //创建几个商品
    // await Product.create({  //沃尔玛商店
    //     shopId: '64268416d3c6ad2a1662bf15',
    //     name: '葡萄',
    //     imgUrl: '/images/product/grape.jpg',
    //     sales: 100,
    //     price: 33,
    //     oldPrice: 36,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    // await Product.create({
    //     shopId: '64268416d3c6ad2a1662bf15',
    //     name: '桃子',
    //     imgUrl: '/images/product/peach.jpg',
    //     sales: 50,
    //     price: 16,
    //     oldPrice: 19,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
        await Product.create({
        shopId: '64268416d3c6ad2a1662bf15',
        name: '苹果',
        imgUrl: '/images/product/apple.jpg',
        sales: 50,
        price: 16,
        oldPrice: 19,
        tabs: ['all', 'seckill', 'fruit']
    })
    // await Product.create({
    //     shopId: '64268416d3c6ad2a1662bf18',  //山姆会员商店
    //     name: '西瓜',
    //     imgUrl: '/images/product/watermelon.jpg',
    //     sales: 180,
    //     price: 13,
    //     oldPrice: 15,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    //查询某个商店，某个tab的商品列表
    const list = await Product.find({
        shopId:'64268416d3c6ad2a1662bf15',
        tabs:{
            $in:'seckill'  //秒杀
        }
    })
    console.log('沃尔玛包含秒杀的商品：',list)
})()