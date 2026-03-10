const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

username:String,
email:String,
password:String,

btcBalance:{
type:Number,
default:0
},

usdBalance:{
type:Number,
default:10000
}

})

module.exports = mongoose.model("User",userSchema)
