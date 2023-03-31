/**
 * @description 订单数据操作
 * @author 欣欣
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Products')
!(async () => {
    //创建订单
    const requestBody = {
        addressId: '64265f98479ccfb7757b6f4a',
        shopId: '64268416d3c6ad2a1662bf15',
        shopName: '沃尔玛',
        isCanceled: false,
        products: [
            {
                id: '64268812da37c2fca803fd2a',
                num: 3
            },
            {
                id: '64268812da37c2fca803fd2d',
                num: 5
            }
        ]
    }
    //获取Address
    const address = await Address.findById(requestBody.addressId)
    //获取商品列表
    const pIds = requestBody.products.map(p => p.id) //['商品1 id','商品2 id']
    const productList = await Product.find({
        shopId: requestBody.shopId,
        _id: {
            $in: pIds
        }
    })
    //   console.log('pIds:',pIds)
    //   console.log(productsList)
    //整合订单购买数量
    const productListWidthSales = productList.map(p => {
        //商品 id
        const id = p._id.toString()
        //找到商品的购买数量
        const filterProducts = requestBody.products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            throw Error('未找到匹配的销量数据')
        }
        return {
            product: p,
            orderSales: filterProducts[0].num
        }
    })
    // console.log(productListWidthSales)
    await Order.create({
        username: 'YuXin',
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
        address,
        products: productListWidthSales //最难的点
    })
})()