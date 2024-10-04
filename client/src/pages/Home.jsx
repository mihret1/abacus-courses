import React from 'react'
 import p1 from '../assets/p1.jpg'
 import p2 from '../assets/p2.jpg'
 import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Navbar from '../components/Navbar'
// import '../styles/home.css'

function Home() {
  return (
    <div>
        <div className=' h-[850px] '   style={{backgroundImage:`url(${p2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
           <Navbar />
           <div className='homeOne h-[100%] w-[100%] text-white text-bold pt-12 max-sm:pt-6'>
              
              <div className='flex flex-col items-center justify-center max-sm:px-3 '>
                <p className='text-[#D0B357] underline text-[21px]'>welcome to Abacus Course  </p>
                <h1 className='text-[45px] max-sm:text-[25px] font-bold   text-center md:max-lg:w-2/3 lg:w-1/2 '>
                  Interactive Learning Engaging Students in the Digital Age
                </h1>
                <p className='text-xl  text-center max-sm:text-lg'> Get 1500+ courses Best Quality online Courses from Abacus </p>
                <button className='bg-[#D0B357] px-3 py-1.5 rounded-md my-5'><a href='/'>Find Your Best Course</a></button>
              </div>
           </div>

           <div className='flex'>

           </div>
           
          

       </div>
    </div>
  
  )
}

export default Home