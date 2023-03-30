//use controller
const User = require('../model/User')
//登录
async function login(suername, password) {
    const user = await User.findOne({ username, password })
    if (user != null) {//登录成功
        return true
    }
    return false
}
//注册
async function register(userInfo = {}) {
    const newUser = await User.create(userInfo)
    return newUser
    //插入数据库  返回注册的信息
}

module.exports = {
    register,
    login
}