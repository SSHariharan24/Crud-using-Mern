const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const userModel = mongoose.model("users",Userschema)
module.exports = userModel