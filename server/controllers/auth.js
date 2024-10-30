
const User=require('../models/auth')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const crypto = require('crypto');
const nodemailer = require('nodemailer');


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


 

const requireReset=async(req,res)=>{

    try{
        const {email}=req.body
        const user= await User.findOne({email})
        if (!user) return res.status(400).send('email not found')
    
        const token=crypto.randomBytes(32).toString('hex') 
        user.resetPasswordToken=token
        user.resetPasswordExpires= Date.now() + 3600000
        await user.save()
    
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: { user: 'mihlet2@gmail.com', pass: 'zwbc wwyj otox jkvj' },
          });
        
          const mailOptions = {
            to: user.email,
            from: 'eagle',
            subject: 'Password Reset',
            text: `Please click on the following link to reset your password: http://localhost:5173/reset/${token}`,
          };
    
          transporter.sendMail(mailOptions,(err)=>{
            if(err) return res.status(400).send(err)
             res.send('reset link send')   
          })



    }catch(error){
        console.log(error)
    }

}



const resetPassword=async(req,res)=>{
        try{
            const user = await User.findOne({
                resetPasswordToken: req.params.token,
                resetPasswordExpires: { $gt: Date.now() },
              });
        
              if(!user) return res.status(400).send('token invalid or expire')
                const salt=await bcrypt.genSalt(10)
                const hashedPassword=await bcrypt.hash(req.body.password,salt)
                user.password = hashedPassword; 
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;
                await user.save();
              
                res.status(200).send('Password updated');  

        }catch(error){
            console.log(error)
        }





}

module.exports={Login,Signup,deleteUser,requireReset,resetPassword}