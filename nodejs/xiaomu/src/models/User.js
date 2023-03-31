/**
 * @description User Model
 * @author 欣欣
 */

const mongoose = require('../db/db')
//const {mongo} = require('../db/db')

const Schema = mongoose.Schema({  //Schema 规范数据格式
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:String
},{timestamps:true})

const User = mongoose.model('user',Schema)
module.exports = User