
// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import img1 from './../assets/pr3.jpg'

// import FileBase from 'react-file-base64';
// import Footer from '../components/Footer';
// import emailjs from '@emailjs/browser';


// function Register() {
//     const [fullname,SetFullname]=useState('')
//     const [email,SetEmail]=useState('')
//     const [phone,SetPhone]=useState('')
//     const [address,SetAddress]=useState('')
//     const [course,SetCourse]=useState('')
//     const [reciept,SetReciept]=useState('')

//    const [errorr,setError]=useState(false)
//    const [sucesss,setSucess]=useState(false)

//     const handleRegistration=(e)=>{
//       e.preventDefault()
//      const  serviceId='service_3ja3tcc'
//      const  publicKey='EhN2wmPgm4E7rWzdO'
//      const  templateId='template_2dmvazj'


//       const templateParams={
//           from_name : fullname,
//           from_email:email,
//           to_name:' web wizard ',
//           message:[fullname,phone,email,address,course,reciept]
//           }

//          emailjs.send(serviceId,templateId,templateParams,publicKey)
//             .then((response)=>{
//               console.log('sucessfully sent',response)
//               SetFullname('')
//               SetEmail('')
//               SetPhone('')
//               SetAddress('')
//               SetCourse('')
//               SetReciept('')
//               setError(false)
//               setSucess(true)
//             })
//             .catch((error)=>{
//               setError(true)
//               setSucess(false)
//               console.log('there is error !',error)
              
//             })


//       }
    

//   return (
//     <div className=''>
//         <div className=' h-[270px] bg-[#0B1546]'>
//             <Navbar />
//             <span className='text-white text-2xl  flex  justify-center pt-20'>Register your Courses</span>
//         </div>
//         <div className='pt-32 text-center  gap-1 flex flex-col items-center'>
//          <p className='text-2xl font-semibold'>Register by selecting your course</p> 
//          <p className='font-semibold pb-5'>Acc no. 1000476782492</p>

//          </div>
//         <div className=' pb-28 flex gap-5  max-mdd:flex-col  justify-center items-center '>
             
//              <img src={img1} className='max-mdd:w-[90%] mdd:max-lg:w-[350px] lg:max-xl:w-[500px] xl:w-[550px] max-xs:h-[250px] xs:max-sm:h-[350px]  sm:max-mdd:h-[420px] mdd:h-[520px]'/>
//              <form onSubmit={handleRegistration} className='flex flex-col gap-2 max-mdd:w-[90%]  w-[550px] max-md:justify-center px-5 '>
//                 <div className='flex flex-col' >
//                    <span className='text-lg font-serif'>Enter your fullname</span>
//                    <input
//                     className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
//                     value={fullname} type='text'  onChange={(e)=>SetFullname(e.target.value)} placeholder='fullname...' />
//                 </div>
//                 <div className='flex flex-col' >
//                    <span className='text-lg font-serif'>Enter  your Email</span>
//                    <input
//                     className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
//                      value={email} type='email' onChange={(e)=>SetEmail(e.target.value)} placeholder='Email...' />
//                 </div>
//                 <div className='flex flex-col' >
//                    <span className='text-lg font-serif'>Enter your phone number</span>
//                    <input
//                     className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
//                     value={phone} type='text' onChange={(e)=>SetPhone(e.target.value)} placeholder='phone number...' />
//                 </div>
//                 <div className='flex flex-col' >
//                    <span className='text-lg font-serif'>Enter your address</span>
//                    <input
//                     className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
//                      value={address} type='text' onChange={(e)=>SetAddress(e.target.value)} placeholder='address...' />
//                 </div>
//                 <div className='flex flex-col' >
//                    <span className='text-lg font-serif'>select your course</span>
//                    <select name="courses" id="courses"
//                      className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500' 
//                      onChange={(e)=>SetCourse(e.target.value)}
//                      value={course}
//                     >  

//                         <option value="graphics">graphics</option>
//                         <option value="web">web</option>
//                         <option value="mobile">mobile</option>
//                         <option value="video editing">video editing</option>
//                     </select>
                   
//                 </div>
//                 <div className='flex flex-col gap-3' >
//                    <span className='text-lg font-serif'>Enter your reciept you paid</span>
//                    <FileBase 
//                    type='file'
//                    multiple={false}
//                    onDone={({base64})=>SetReciept(base64)}

//                 />
                
//                 </div> 
               
                
//                      <button type='submit' className='bg-[#1F788C] py-2 text-white text-lg'>Register</button> 

//                         { errorr && <p className='text-center text-xl font-semibol text-red-500'>unable to register, try again!</p>
//                         } 

//                          { sucesss  && <p className='text-center text-xl font-semibol text-green-500'>successfully register</p>
//                         }            
//              </form>
//         </div>

//         <Footer />
//     </div>
//   )
// }

// export default Register


















import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img1 from './../assets/pr3.jpg'

import FileBase from 'react-file-base64';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';



function Register() {
    const [fullname,SetFullname]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [address,SetAddress]=useState('')
    const [course,SetCourse]=useState('')
    const [reciept,SetReciept]=useState('')

   const [errorr,setError]=useState(false)
   const [sucesss,setSucess]=useState(false)

   const handleFileUpload = async (file) => {
    try {
      const options = {
        maxSizeMB: 0.04, // Reduce image to around 500KB
        maxWidthOrHeight: 700,
      };
      const compressedFile = await imageCompression(file, options);
      const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
      SetReciept(base64);
    } catch (error) {
      console.error('Error compressing the file:', error);
    }
  };

    const handleRegistration=(e)=>{
      e.preventDefault()
     const  serviceId='service_3ja3tcc'
     const  publicKey='EhN2wmPgm4E7rWzdO'
     const  templateId='template_2dmvazj'


      const templateParams={
          from_name : fullname,
          from_email:email,
          to_name:' abacus course ',
          message:[fullname,phone,email,address,course,reciept]
          }

         emailjs.send(serviceId,templateId,templateParams,publicKey)
            .then((response)=>{
              console.log('sucessfully sent',response)
              SetFullname('')
              SetEmail('')
              SetPhone('')
              SetAddress('')
              SetCourse('')
              SetReciept('')
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
            <span className='text-white text-2xl  flex  justify-center pt-20'>Register your Courses</span>
        </div>
        <div className='pt-32 text-center  gap-1 flex flex-col items-center'>
         <p className='text-2xl font-semibold'>Register by selecting your course</p> 
         <p className='font-semibold pb-5'>Acc no. 1000476782492</p> 

        </div>
        <div className=' pb-28 flex gap-5  max-mdd:flex-col  justify-center items-center '>
             
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
                   onDone={({ file }) => handleFileUpload(file)}
                  //  onDone={({base64})=>SetReciept(base64)}

                />
                
                </div> 
               
                
                     <button type='submit' className='bg-[#1F788C] py-2 text-white text-lg'>Register</button> 

                        { errorr && <p className='text-center text-xl font-semibol text-red-500'>unable to register, try again!</p>
                        } 

                         { sucesss  && <p className='text-center text-xl font-semibol text-green-500'>successfully register</p>
                        }            
             </form>
        </div>

        <Footer />
    </div>
  )
}

export default Register