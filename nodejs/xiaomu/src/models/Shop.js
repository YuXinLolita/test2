/**
 * @description Shop Model
 * @author 欣欣
 */

const mongoose = require('../db/db')
const Schema = mongoose.Schema({
    name:String,
    imgUrl:String,
    sales:Number,
    expressLimi:{
        type:Number,
        default: 0
    },
    expressPrice:Number,
    slogan:String

},{timestamps:true})
const shop = mongoose.model('shop',Schema)
module.exports = shop