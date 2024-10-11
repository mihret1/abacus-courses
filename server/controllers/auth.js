
const User=require('../models/auth')

const bcrypt=require('bcrypt')

const Signup=async(req,res)=>{
    try{
        const {fullname,email,password} = req.body

        const existEmail=await User.findOne({email})
        if(existEmail) res.send('email already register')

        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)

        const user=await User.create({fullname,email,hashedPassword})
        res.status(200).json(user)
        
    }catch(error){
       res.send(error)
    }
  
    
}

const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const isExist=await User.findOne({email})

        if(!isExist) res.send('email doesnt exist')
        const matched= await bcrypt.compare(password,isExist.password)  

        if(!matched) res.send('email or passord incorrect')
         res.status(200).json(isExist)
      
     }catch(error){
        res.status(500).json(error)
    }
}


module.exports={Login,Signup}