const express=require("express")
require('dotenv').config()
var cors = require('cors')
var cookieParser = require('cookie-parser')
const app=express()
app.use(cookieParser())
const{routes}=require("./Routes/routes")
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("DB connected")}).catch(()=>{console.log("Db not  connected")})
app.use(express.json())
app.use("/",routes)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})