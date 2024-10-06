
import React from 'react'
import Navbar from '../../components/Navbar'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import Footer from '../../components/Footer';


function Marketing() {
  return (
    <div>
         <div className=' h-[200px] bg-[#0B1546]'>
            <Navbar />
            <span className='text-white text-2xl  flex  justify-center pt-10'>Digital Marketing course</span>
        </div>

        <div className='flex max-mdd:flex-col pt-10 px-5 pb-28'>

            <div className='w-[60%] max-mdd:w-[95%]'>
                <div className='flex flex-col gap-2'>
                   <span className='bg-[#1F788C] w-52 text-white text-lg flex justify-center  items-centerpx-4 py-1 rounded-full'>Web Development</span>
                    <h1 className='text-2xl font-bold'>The Digital Marketing Training & Course </h1>
                     <p className='text-xl font-sans font-semibold pt-8'>Course Overview</p>
                     <div className='flex flex-col gap-5 text-gray-600'>
                     <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                     </p>
                     <p>
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                     <p>
                     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
                    </p>
                    </div>
                    <p className='text-2xl pt-6'>What You Will Learn</p>
                    <div className='flex gap-16 max-sm:flex-col'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>

                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>
                            <div className='flex items-center gap-2 text-xl text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'29px' }}/>course introduction </div>

                        </div>

                    </div>
                    <div className='flex flex-col'>
                    <p className='text-2xl pt-6'>Requirements</p>
                    <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2 max-sm:text-[16px] text-lg text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'25px' }}/>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</div>
                            <div className='flex items-center gap-2 max-sm:text-[16px] text-lg text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'25px' }}/>No previous design experience is needed. </div>
                            <div className='flex items-center gap-2 max-sm:text-[16px] text-lg text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'25px' }}/> previous Adobe XD skills are needed.A free trial can be A free trial can be </div>
                            <div className='flex items-center gap-2 max-sm:text-[16px] text-lg text-gray-600'><TaskAltIcon  sx={{color:'#1F788C' ,fontSize:'25px' }}/>No previous web developemnts skills are needed.</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] max-mdd:w-[95%]  flex flex-col mdd:items-end mdd:px-5  py-4'>
               <div className='flex flex-col gap-3 w-[400px] max-xs:w-[345px]  rounded-lg shadow-lg  '>
                    <iframe 
                    className='w-[100%] h-72'
                    loading="lazy" 
                    title="Web Developement" 
                    src="https://www.youtube.com/embed/YKU8TAYYYF0?si=c-aLSXT1D5Zm5Njr" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

                    </iframe>
                    <span className='text-2xl  font-semibold px-4 py-3'>$320</span>
                     <div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><TimerOutlinedIcon /> &nbsp; Duration</p>
                        <span>45 days</span>
                     </div>

                     <div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><PlayLessonOutlinedIcon/> &nbsp; Lessons</p>
                        <span>13</span>
                     </div>
                     <div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><ExtensionOutlinedIcon /> &nbsp; Quizes</p>
                        <span>5</span>
                     </div>
                     <div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><Person3OutlinedIcon /> &nbsp;Language</p>
                        <span>Spanish, English</span>
                     </div><div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><GTranslateRoundedIcon /> &nbsp; Max Students</p>
                        <span>35</span>
                     </div><div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><SignalCellularAltOutlinedIcon /> &nbsp; Skill level</p>
                        <span>expert</span>
                     </div><div className='flex justify-between border-b-2 pb-2 px-4 text-gray-600'>
                        <p className='text-center justify-center items-center flex'><CardMembershipOutlinedIcon /> &nbsp; Certeficate</p>
                        <span>2</span>
                     </div>
                     
                     
               </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Marketing