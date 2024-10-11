const {Login,Signup} =require('../controllers/auth')
const express=require('express')
const routes=express.Router()


routes.get('/',Login)
routes.post('/',Signup)

module.exports=routes