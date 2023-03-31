/**
 * @description Order Model
 * @author 欣欣
 */

const mongoose = require('../db/db')
const Schema = mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    city:String,
    shopName:String,
    isCanceled:{
        type:Boolean,
        default:true
    },
    address:{
        username:String,
        city:String,
        department:String,
        houseNumber:String,
        name:String,
        phone:String                
    },
    products: [
        {
            product:{
                name:String,
                imgUrl:String,
                sales:Number,
                price:Number,
                oldPrice:Number,
                tabs:[String] 
            },
            orderSales:Number
        }
    ]
},{timestamps:true})
const Order = mongoose.model('order',Schema)
module.exports = Order