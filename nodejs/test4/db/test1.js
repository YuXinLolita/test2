const {User} = require('./model')

!(async () => {
    // const yuxin = await User.create({
    //     username : '雨欣',
    //     age:9,
    //     password:'abcdefgh',
    //     city:'tokyo',
    //     gender:2
    // })
    // const zhangsan = await new User({
    //     username:'张三',
    //     password:'1qaz1234',
    //     city:'北京',
    //     age:18,
    //     gender:1
    // })
    // zhangsan.save()
    // const xiaoxin = await User.create({
    //     username:'小欣',
    //     age:10,
    //     password:'12345678',
    //     city:'paris',
    //     gender:2
    // })
//     const zhenzhen = await User.create({
//         username:'蓁蓁',

// age:10,
// password:'80805050',
// city:'dongjing',
// gender:2
//     })
    // const findResult = await User.find().toArray()
    //const  findResult = await User.updateOne({name:'晓晓',$set:{age:11}})
    // const findResult = await User.find({username:'小欣'})
   // const findResult = await User.find().sort({_id:-1})
//    const findResult = await User.findOne({username:'小欣'})
    const findResult = await User.findOne({username:'小欣'})
    console.log('find documents => ',findResult)
    console.log('操作顺利完成')

// console.log('create sussecc => ',zhangsan)
})()

