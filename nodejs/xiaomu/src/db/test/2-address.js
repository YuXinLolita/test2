/**
 * @description 地址数据操作
 * @author 欣欣
 */

const Address = require('../../models/Address')
!(async () => {
    //创建收货地址
    // await Address.create({
    //     username:'于心',
    //     city:'北京市',
    //     department:'真境花园',
    //     houseNumber:'门牌号1',
    //     name:'YuXin',
    //     phone:'13234567890'
    // })
    // await Address.create({
    //     username:'雨欣',
    //     city:'东京',
    //     department:'真境花园',
    //     houseNumber:'门牌号2',
    //     name:'YuXin',
    //     phone:'13234567890'
    // })
    //获取收货地址列表
    // const addrestItem = await Address.find( {name:'YuXin'}).sort({_id:-1})
    // console.log('get useritem address',addrestItem)
    //更具id获取单个收货地址
    // const id = "6426601cf1b0780f0ca9d661"
    // const address = await Address.findById(id)
    // console.log('byid find document =>',address)

    //三个查询条件 {_id: id ,username:'name'},newData,{new:true //返回更新之后返回的数据}
    const id = '64265f98479ccfb7757b6f4a'
    const newData = {
        username:'许曼语New',
        city:'东京',
        department:'真境花园',
        houseNumber:'门牌号2',
        name:'XuManyu',
        phone:'13234567890'

    }
       const address = await Address.findOneAndUpdate({
        _id:id ,username:'许曼语'},newData,
        {new:true})
        console.log('update document =>',address)
})()