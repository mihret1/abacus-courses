

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img1 from './../assets/pr3.jpg'

import FileBase from 'react-file-base64';



function Register() {
    const [fullname,SetFullname]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [address,SetAddress]=useState('')
    const [course,SetCourse]=useState('')
    const [reciept,SetReciept]=useState('')

    const handleRegistration=()=>{}

  return (
    <div className='h-[1000px]'>
        <div className=' h-[270px] bg-[#0B1546]'>
            <Navbar />
            <span className='text-white text-2xl  flex  justify-center pt-20'>Register your Courses</span>
        </div>
        <div className='pt-32 text-center  gap-1 flex flex-col items-center'>
         <p className='text-2xl font-semibold'>Register by selecting your course</p> 
         <p className='font-semibold pb-5'>Acc no. 1000476782492</p> 

        </div>
        <div className='flex gap-5  max-mdd:flex-col  justify-center items-center '>
             
             <img src={img1} className='max-mdd:w-[90%] mdd:max-lg:w-[350px] lg:max-xl:w-[500px] xl:w-[550px] max-xs:h-[250px] xs:max-sm:h-[350px]  sm:max-mdd:h-[420px] mdd:h-[520px]'/>
             <form onSubmit={handleRegistration} className='flex flex-col gap-2 max-mdd:w-[90%]  w-[550px] max-md:justify-center px-5 '>
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your fullname</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={fullname} type='text'  onChange={(e)=>SetFullname(e.target.value)} placeholder='fullname...' />
                </div>
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter  your Email</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     value={email} type='email' onChange={(e)=>SetEmail(e.target.value)} placeholder='Email...' />
                </div>
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your phone number</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={phone} type='text' onChange={(e)=>SetPhone(e.target.value)} placeholder='phone number...' />
                </div>
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>Enter your address</span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     value={address} type='text' onChange={(e)=>SetAddress(e.target.value)} placeholder='address...' />
                </div>
                <div className='flex flex-col' >
                   <span className='text-lg font-serif'>select your course</span>
                   <select name="courses" id="courses"
                     className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
                     onChange={(e)=>SetCourse(e.target.value)}
                     value={course}
                    >  

                        <option value="graphics">graphics</option>
                        <option value="web">web</option>
                        <option value="mobile">mobile</option>
                        <option value="video editing">video editing</option>
                    </select>
                   
                </div>
                <div className='flex flex-col gap-3' >
                   <span className='text-lg font-serif'>Enter your reciept you paid</span>
                   <FileBase 
                   type='file'
                   multiple={false}
                   onDone={({base64})=>SetReciept(base64)}

                />
                
                </div> 
               
                
                     <button type='submit' className='bg-[#1F788C] py-2 text-white text-lg'>Register</button> 

             </form>
        </div>
    </div>
  )
}

export default Register