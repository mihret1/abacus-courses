import React from 'react'
import logo from '../asset/logoo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function CommenPart({children}) {
  return (
    <div className='flex max-md:flex-col  '>
     
      <div className='w-[300px] md:h-[650px] max-md:h-[400px] md:max-lg:w-[190px]  bg-[#000D1D] flex flex-col gap-3'>
           <div className='flex items-center md:max-lg:flex-col md:pb-8  pt-5 '><img src={logo}  className='w-16 h-14 rounded-full'/><span className='text-white text-xl md:max-lg:text-lg font-bold'>Eagle Traning center</span> </div>
           <div className='md:hidden text-lg text-slate-200 px-4 pb-8'>mihlet2@gmail.com</div>

           <a href='/' className='flex items-center  justify-between  px-5 text-lg font-semibold text-slate-200 '>
              <div className='flex items-center gap-2 '><HomeIcon /> <span> Dashboard </span></div>
              <div className='text-white'> <KeyboardArrowRightOutlinedIcon/> </div>
           </a>
            <a href='/student' className='flex items-center  justify-between  px-5 text-lg font-semibold text-slate-200 '>
              <div className='flex items-center gap-2 '><HowToRegIcon /> <span> Students </span></div>
              <div className='text-white'> <KeyboardArrowRightOutlinedIcon/> </div>
            </a>
            <a href='/interested' className='flex items-center  justify-between  px-5 text-lg font-semibold text-slate-200 '>
              <div className='flex items-center gap-2 '><CreateIcon /> <span> Interested </span></div>
              <div className='text-white'> <KeyboardArrowRightOutlinedIcon/> </div>
            </a>


      </div>
      <div className='w-[80%] max-md:w-[100%]'>
          <div className='max-md:hidden flex  items-center px-8 pt-3 justify-between w-full '>
             <div className='text-[21px] text-gray-600 font-semibold '>Admin Dashboard</div>
             <div className='text-lg text-gray-700 font-semibold'>mihlet2@gmail.com</div>
          </div>
          <div className=''>
             {children}
          </div>   
      </div>
    
    </div>
  )
}

export default CommenPart