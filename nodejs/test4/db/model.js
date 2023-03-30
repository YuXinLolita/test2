const mongoose = require('./db')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    password:String,
    age:Number,
    city:String,
    gender:{
        type:Number,
        default:0,
    }

},{timestamps:true})
const User = mongoose.model('user',userSchema)
const commentSchema = mongoose.Schema({
    content:{
        stype:String,
        required:true  //必需
    },
    username:String
},{timestamps:true})
const Comment = mongoose.model('comment', commentSchema)
module.exports = {
    User,
    Comment
}