const router = require("express").Router()
const User = require("../models/User")

const BTC_PRICE = 65000

router.post("/buy", async(req,res)=>{

const {userId,usdAmount} = req.body

const user = await User.findById(userId)

const btc = usdAmount / BTC_PRICE

user.btcBalance += btc
user.usdBalance -= usdAmount

await user.save()

res.json({
btcBought:btc
})

})

router.post("/sell", async(req,res)=>{

const {userId,btcAmount} = req.body

const user = await User.findById(userId)

const usd = btcAmount * BTC_PRICE

user.btcBalance -= btcAmount
user.usdBalance += usd

await user.save()

res.json({
usdReceived:usd
})

})

module.exports = router
