/**
 * @description Shop Model
 * @author 欣欣
 */

const mongoose = requrie('../db/db')
const schema = mongoose.Schema({
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
const shop = mongoose.Schema('shop',schema)
module.exports = shop