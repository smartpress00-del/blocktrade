const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const tradeRoutes = require("./routes/trade")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/cryptobroker")

app.use("/api/auth", authRoutes)
app.use("/api/trade", tradeRoutes)

app.listen(5000, () => {
console.log("Crypto broker running on port 5000")
})
