/**
 * @description Address Model
 * @author 欣欣
 */

const mongoose = require('../db/db')
//const User = require('./User')
const Schema = mongoose.Schema({
    username:{
        type:String,
        require:true,//必须
    },
    city:String,
    department:String,
    houseNumber:String,
    name:String,
    phone:String
},{timestamps:true})
const Address = mongoose.model('address',Schema)
module.exports = Address