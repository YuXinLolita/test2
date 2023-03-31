/**
 * @description 用户数据操作
 * @author 欣欣
 */

const User = require('../../models/User')
!(async()=> {
    //注册 ：创建一个新的用户
    // await User.create({
    //     username:'YuXin',
    //     password:'abcdefgh123'
    // })
    //再创建一个用户
    // await User.create({
    //     username:'12345678890',
    //     password:'123'
    // })
    // const newItem =  await User.create({
    //     username:'于心',
    //     password:'浅草才能没马蹄'
    // })

    // console.log('新增加的项目是 :',newItem)
    //删除用户
//    const deleteItem = await User.deleteOne({password:'abcdefgh123'})
//    console.log('deleteitem is =>', deleteItem)
    const  deleteItem = await User.updateOne({
        username:'YuXin',
        username:'于欣'

    })
    console.log('***123 测试await')
    console.log('delete user info is =>',deleteItem)
})()