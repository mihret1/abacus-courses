
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
















// what really work is this

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img1 from './../assets/pr3.jpg'
import abby from '../assets/abby.jpg'
import cbe from '../assets/cbe.png'
import awash from '../assets/awash.png'
import telebir from '../assets/telebir.png'
import FileBase from 'react-file-base64';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';

import CircularProgress from '@mui/material/CircularProgress'; // MUI Loading Spinner


function Register() {
    const [fullname,SetFullname]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [address,SetAddress]=useState('')
    const [course,SetCourse]=useState('')
    const [reciept,SetReciept]=useState('')
    const [account,SetAccount]=useState('')
   const [errorr,setError]=useState(false)
   const [sucesss,setSucess]=useState(false)
   const [fieldControl,setFieldcontrol]=useState(false)
   const [isLoading, setIsLoading] = useState(false); 


   const handleFileUpload = async (file) => {
    try {
      const options = {
        maxSizeMB: 0.04, // Reduce image to around 500KB
        // maxWidthOrHeight: 700,
      };
      const compressedFile = await imageCompression(file, options);
      const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
      SetReciept(base64);
    } catch (error) {
      console.error('Error Compressing the file:', error);
    }
  };

    const handleRegistration=(e)=>{
     


     e.preventDefault()
     setError(false)
     setSucess(false)
     setIsLoading(true);  // Start loading
     setFieldcontrol(false)

     if(!fullname || !phone || !reciept || !account) {
      setFieldcontrol(true)
      setIsLoading(false);  // Start loading

      
      return;
    }
     const  serviceId='service_3ja3tcc'
     const  publicKey='EhN2wmPgm4E7rWzdO'
     const  templateId='template_2dmvazj'


      const templateParams={
          from_name : fullname,
          from_email:fullname,
          to_name:' egle training center ',
          name:fullname,
          phone_number:phone,
          accountType:account,
          reciept:reciept,
          }

         emailjs.send(serviceId,templateId,templateParams,publicKey)
            .then((response)=>{
              console.log('sucessfully sent',response)
              SetFullname('')
              SetPhone('')
              SetAccount('')
              SetReciept('')
              setError(false)
              setSucess(true)
              setFieldcontrol(false)
              setIsLoading(false);
            })
            .catch((error)=>{
              setFieldcontrol(false)

              setError(true)
              setSucess(false)
              setIsLoading(false);
              console.log('there is error !',error)
              
            })


      }
    

  return (
    <div id='register' className=''>
       
        <div className='pt-32 text-center  gap-1 flex flex-col items-center '>
           <p className='text-3xl max-xs:text-xl pb-10 font-bold bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 bg-clip-text text-transparent'>Register for Digital Marketing Course</p> 

        </div>
         <div className='  flex gap-7  max-mdd:flex-col   max-mdd:items-center  justify-center  '>
             <form onSubmit={handleRegistration} className='flex flex-col gap-2 max-mdd:w-[90%]  w-[590px] max-md:justify-center px-5 shadow-xl py-3 '>
                <div className='flex flex-col gap-1' >
                   <span className=' '>ስም [Name]
                   </span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={fullname} type='text'  onChange={(e)=>SetFullname(e.target.value)} placeholder='fullname...' />
                </div>
              
                <div className='flex flex-col gap-1' >
                   <span className=''>ስልክ ቁጥር [Phone Number]
                   </span>
                   <input
                    className='border-2 p-2 outline-blue-500   rounded-lg bg-[#cbcee6] text-black placeholder-gray-500'  
                    value={phone} type='text' onChange={(e)=>SetPhone(e.target.value)} placeholder='phone number...' />
                </div>
                <div className='flex flex-col gap-2 pt-3'>
                 <span className=''>
                  የመመዝገቢያ ክፍያ 3500 ብር
                    ክፍያ አማራጭ [Payment Method]</span>

                  <div className='grid max-sm:grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2'>
                    <div className=' w-56 lg:w-64'>
                       <div className='border-2 py-3 text-[14px] flex flex-col px-3'>

                          <ul className=' list-disc text-gray-700 marker:text-blue-500   px-3 '>
                           <li>የኢትዮጵያ ንግድ ባንክ</li> 
                           <li> Commerical Bank of Ethiopia</li> 
                           <li>  1000363590474 |  Mike Teke</li> 
                              {/* <span>   Mike Teke</span>  */}
                           <li> amount: 3500 birr</li> 
                          </ul>
                          <div className='flex justify-between items-center'> 
                           <input type="radio"  name="account" value="cbe" checked={account==='cbe'}  onChange={(e)=>SetAccount(e.target.value)}  className='scale-150' />
                          <img src={cbe} className=' h-16 w-16 rounded-full '/>

                          </div> 
                       </div>
                    </div>
                    <div className=' w-56 lg:w-64'>
                      <div className='border-2 py-3 text-[14px] flex flex-col px-3'>
                       <ul className=' list-disc text-gray-700 marker:text-blue-500   px-3 '>
                           <li>አቢሲኒያ ባንክ</li> 
                           <li>Bank of Abyssina</li> 
                           <li>42084689 | Mike Teke</li> 
                           <li> amount: 3500 birr</li> 
                        </ul>
                        <div className='flex justify-between items-center'> 
                           <input type="radio"  name="account" value="abbysinia" checked={account==='abbysinia'}  onChange={(e)=>SetAccount(e.target.value)}  className='scale-150' />
                           <img src={abby} className=' h-16 w-20 rounded-full '/>

                        </div> 
                      </div>  
                    </div>
                    <div className='w-56 lg:w-64'>
                    <div className='border-2 py-3 text-[14px] flex flex-col px-3'>
                       <ul className=' list-disc text-gray-700 marker:text-blue-500   px-3 '>
                           <li>አዋሽ ባንክ</li> 
                           <li>Awash Bank </li> 
                           <li> 013201210701600 | Mike Teke</li> 
                           <li> amount: 3500 birr</li> 
                        </ul>
                        <div className='flex justify-between items-center'> 
                           <input type="radio"  name="account" value="awash" checked={account==='awash'}  onChange={(e)=>SetAccount(e.target.value)}  className='scale-150' />
                           <img src={awash} className=' h-16 w-24 rounded-full '/>

                        </div> 
                      </div>
                      
                    </div>
                    <div className='w-56 lg:w-64'>

                       <div className='border-2 py-3 text-[14px] flex flex-col px-3'>

                          <ul className=' list-disc text-gray-700 marker:text-blue-500   px-3 '>
                           <li>ቴሌ ብር</li> 
                           <li> Tele Birr</li> 
                           <li>0912366830 | Mike Teke</li> 
                           <li> amount: 3500 birr</li> 
                          </ul>
                          <div className='flex justify-between items-center'> 
                           <input type="radio"  name="account" value="telebir" checked={account==='telebir'} onChange={(e)=>SetAccount(e.target.value)}  className='scale-150' />
                          <img src={telebir} className=' h-16 w-20 rounded-full '/>

                          </div> 
                       </div>
              
                    </div>

                  </div>
                </div>
              
                <div className='flex flex-col gap-3 pt-2' >
                   <span className=''>የባንክ ስሊፕ ወይም ስክሪን ሻት 
                   [Bank Slip or Screenshot]</span>
                   <FileBase 
                   type='file'
                   multiple={false}
                   onDone={({ file }) => handleFileUpload(file)}
                  //  onDone={({base64})=>SetReciept(base64)}

                />
                
                </div> 
                   {isLoading && <p className='text-center'> <CircularProgress /></p> }
                
                     <button type='submit' className='bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 py-2 text-white text-lg hover:bg-gradient-to-r hover:to-[#0B1546] hover:via-purple-500 hover:from-pink-500 hover:bg-yellow-500'>Register</button> 
                     { fieldControl && <p className='text-center text-lg font-semibol text-red-500'>Enter all fields and try again!</p>
                        } 


                        { errorr && <p className='text-center text-xl font-semibol text-red-500'>Unable to register, try again!</p>
                        } 

                         { sucesss  && <p className='text-center  font-semibol text-green-500'>Successfully register,We will review the payment and we will send you the class room telegram link</p>
                        }            
             </form>
                          
             <iframe 
                        className='mt-5 rounded-3xl max-mdd:w-[90%] mdd:max-lg:w-[350px] lg:max-xl:w-[500px] xl:w-[590px] max-xs:h-[250px] xs:max-sm:h-[350px]  sm:max-mdd:h-[420px] mdd:h-[520px]'
                        loading="lazy" 
                        title="Web Developement" 
                        src="https://www.youtube.com/embed/RkmpVOTs7Es?si=itWVyqaoth8Q_r02" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

            </iframe>
             
            
         </div>

    </div>
  )
}

export default Register





// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import img1 from './../assets/pr3.jpg'

// import FileBase from 'react-file-base64';
// import Footer from '../components/Footer';
// import emailjs from 'emailjs-com';

// import imageCompression from 'browser-image-compression';



// function Register() {
//     const [fullname,SetFullname]=useState('')
//     const [email,SetEmail]=useState('')
//     const [phone,SetPhone]=useState('')
//     const [address,SetAddress]=useState('')
//     const [course,SetCourse]=useState('')
//     const [reciept,SetReciept]=useState(null)

//    const [errorr,setError]=useState(false)
//    const [sucesss,setSucess]=useState(false)

//    const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         SetReciept(reader.result) // base64 encoded image
//         };
//       };
//       reader.readAsDataURL(file); // Convert image to base64
//     }
//   ;

//     const handleRegistration=(e)=>{
//       e.preventDefault()
//      const  serviceId='service_3ja3tcc'
//      const  publicKey='EhN2wmPgm4E7rWzdO'
//      const  templateId='template_2dmvazj'


//       const templateParams={
//           from_name : fullname,
//           from_email:email,
//           to_name:' abacus course ',
//           message:[fullname,phone,email,address,course,reciept],
//           image:reciept,
//           }

//          emailjs.send(serviceId,templateId,templateParams,publicKey)
//             .then((response)=>{
//               console.log('sucessfully sent',response)
//               SetFullname('')
//               SetEmail('')
//               SetPhone('')
//               SetAddress('')
//               SetCourse('')
//               SetReciept(null)
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

//         </div>
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
//                    <input
//         type="file"
//         name="image"
//         accept="image/*"
//         onChange={handleFileChange}
//         required
//       />
                
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












