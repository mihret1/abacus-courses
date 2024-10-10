



import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img1 from './../assets/p4.jpg'

import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';



function Auth() {
    const [fullname,SetFullname]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [address,SetAddress]=useState('')
    const [password,setPassword]=useState('')
    const [isLogin,setLogin]=useState(true)

   const [errorr,setError]=useState(false)
   const [sucesss,setSucess]=useState(false)



    const handleSignup=(e)=>{
      e.preventDefault()
     const  serviceId='service_3ja3tcc'
     const  publicKey='EhN2wmPgm4E7rWzdO'
     const  templateId='template_2dmvazj'


      const templateParams={
          from_name : fullname,
          from_email:email,
          to_name:'abacus course ',
          message:[fullname,phone,email,address]
          }

         emailjs.send(serviceId,templateId,templateParams,publicKey)
            .then((response)=>{
              console.log('sucessfully sent',response)
              SetFullname('')
              SetEmail('')
              SetPhone('')
              SetAddress('')
              
              setError(false)
              setSucess(true)
            })
            .catch((error)=>{
              setError(true)
              setSucess(false)
              console.log('there is error !',error)
              
            })


      }
    

  return (
    <div className=''>
        <div className=' h-[270px] bg-[#0B1546]'>
            <Navbar />
          <span className='text-white text-2xl  flex  justify-center pt-20'>{isLogin ? 'Signup':'Login'}</span>
        </div>
        <div className='pt-32 text-center  gap-1 flex flex-col items-center'>
         <p className='text-2xl font-semibold'>{isLogin ? 'Signup':'Login'}</p> 
         <p className='font-semibold pb-5'></p> 

        </div>
        <div className=' pb-28 flex gap-5  max-mdd:flex-col  justify-center items-center '>
             
             <img src={img1} className='max-mdd:w-[90%] mdd:max-lg:w-[350px] lg:max-xl:w-[500px] xl:w-[550px] max-xs:h-[200px] xs:max-sm:h-[250px]  sm:max-mdd:h-[320px] mdd:h-[500px]'/>
             <form onSubmit={handleSignup} className='flex flex-col gap-2 max-mdd:w-[90%]  w-[550px] max-md:justify-center px-5 '>
                {isLogin && <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your fullname</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={fullname} type='text'  onChange={(e)=>SetFullname(e.target.value)} placeholder='fullname...' />
                </div>}
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter  your Email</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     value={email} type='email' onChange={(e)=>SetEmail(e.target.value)} placeholder='Email...' />
                </div>

                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter  your password</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     value={password} type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Password...' />
                </div>
                
                {isLogin && <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your phone number</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={phone} type='text' onChange={(e)=>SetPhone(e.target.value)} placeholder='phone number...' />
                </div>}
                {isLogin && <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your address</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     value={address} type='text' onChange={(e)=>SetAddress(e.target.value)} placeholder='address...' />
                </div>}
                
                
               
                
                     <button type='submit' className='bg-[#1F788C] py-2 text-white text-lg'>{isLogin ? 'Signup':'Login'}</button> 

                        { errorr && <p className='text-center text-xl font-semibol text-red-500'>unable to register, try again!</p>
                        } 

                         { sucesss  && <p className='text-center text-xl font-semibol text-green-500'>successfully register</p>
                        }    

                        {
                         <p className='text-lg font-semibold text-right'>  {isLogin ? 'have already account':'don`t you have account'} <button type="button" className='text-blue-600 text-lg' onClick={()=>setLogin((e)=>!e)}>{isLogin ? 'Login':'SignUP'} </button> </p>
                        }        
             </form>
        </div>

        <Footer />
    </div>
  )
}

export default Auth