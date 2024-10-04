import React from 'react'
 import p1 from '../assets/p1.jpg'
 import p2 from '../assets/p2.jpg'
 import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Navbar from '../components/Navbar'
// import '../styles/home.css'

function Home() {
  return (
    <div>
        <div className=' h-[850px] '   style={{
       
          backgroundImage:`url(${p2})`,
           backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
           <Navbar />

           <div className='homeOne h-[100%] w-[100%] text-white text-bold'>

           hello
           </div>
           
          

       </div>
    </div>
  
  )
}

export default Home