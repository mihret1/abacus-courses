
const User=require('../models/auth')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const Signup=async(req,res)=>{
    try{
        const {fullname,email,password} = req.body


        const existEmail=await User.findOne({email})
        if(existEmail) return res.status(400).send('email already register')

            
            
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)

        const user=await User.create({fullname,email,password:hashedPassword})
        const token=await jwt.sign({id:user._id,email:user.email},'eagle',{expiresIn:240})
        res.status(200).json({msg:'successefuly registerd',user,token})

        
    }catch(error){
       res.send(error)
    }


}


const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})

        if(!user) return res.status(400).send('Login email does not exist')
        const matched= await bcrypt.compare(password,user.password)  

        if(!matched) return res.status(400).send('email or password is incorrect')
         const token= await jwt.sign({id:user._id,email:user.email},'eagle',{expiresIn:240})
         res.status(200).json({msg:'sucessfully login',user,token})
      
     }catch(error){
        res.status(500).json(error)
    }
}


 const deleteUser=async(req,res)=>{
    try{
        const todelete=await User.findById(req.params.id)
        if(!todelete) return res.status(400).send('user doenst exit')
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(400).send('faild to delete')
        res.status(200).json({msg:'deletd',user})    
    }catch(error){
        res.status(500).send(error)
    }
 }


module.exports={Login,Signup,deleteUser}