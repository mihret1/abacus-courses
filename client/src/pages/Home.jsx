import React, { useState } from 'react'
 import p1 from '../assets/p1.jpg'
 import p2 from '../assets/p2.jpg'
 import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Navbar from '../components/Navbar'
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import GroupIcon from '@mui/icons-material/Group';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import VerifiedIcon from '@mui/icons-material/Verified';
// import '../styles/home.css'
import person1 from '../assets/person1.jpg'


import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import PivotTableChartOutlinedIcon from '@mui/icons-material/PivotTableChartOutlined';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';

function Home() {
  const [isHover1,setIsHoverd1]=useState(false)
  const [isHover2,setIsHoverd2]=useState(false)
  const [isHover3,setIsHoverd3]=useState(false)
  const [isHover4,setIsHoverd4]=useState(false)

  const [isHover5,setIsHoverd5]=useState(false)
  const [isHover6,setIsHoverd6]=useState(false)
  const [isHover7,setIsHoverd7]=useState(false)
  const [isHover8,setIsHoverd8]=useState(false)


    const CardOne=(props)=>{
      return(
            <div className=' flex  flex-col items-center justify-center'>
                 <div >{props.iconn}</div>
                <p1 className='text-[23px] font-semibold text-center'>{props.title}</p1>
                <p1 className='text-center'>{props.desc} </p1>
            </div>
            )
      }
   
      const CardTwo=({title,desc,iconn,style,className,classNameTwo,hoverr,setHoverr})=>{
       return(
      <a href='/'  onMouseEnter={()=>(setHoverr(true))}
      onMouseLeave={()=>(setHoverr(false))}>
      <div 
     
      className={`flex flex-col h-40 w-44 pl-4 py-5 gap-5   hover:text-white ${className} `}
      style={style}
      // style={{ ...style, padding: '1rem', backgroundColor: 'lightblue' }}
      >

         {iconn}
         <div className='flex flex-col gap-1'>
           <p className='font-semibold text-xl'>{title}</p>
           <p className={`font-semibold  ${classNameTwo}`}>{desc}</p>
         </div>
      </div>
      </a>
    )
      }

  return (
    <div className='h-[2000px] flex flex-col '>
             {/* section one */}
        <div className=''   style={{backgroundImage:`url(${p2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
           <Navbar />
           <div className='homeOne flex flex-col gap-20 max-sm:gap-10 pb-24 h-[100%] w-[100%] text-white text-bold pt-12 max-sm:pt-6'>
              
              <div className='flex flex-col items-center justify-center max-sm:px-3 '>
                <p className='text-[#DCB128] underline text-[21px]'>welcome to Abacus Course  </p>
                <h1 className='text-[45px] max-sm:text-[25px] font-bold   text-center md:max-lg:w-2/3 lg:w-1/2 '>
                  Interactive Learning Engaging Students in the Digital Age
                </h1>
                <p className='text-xl  text-center max-sm:text-lg'> Get 1500+ courses Best Quality online Courses from Abacus </p>
                <button className='bg-[#DCB128] px-3 py-1.5 rounded-md my-5'><a href='/'>Find Your Best Course</a></button>
              </div>

              <div className='grid gap-2 max-xs:grid-cols-1 xs:max-sm:grid-cols-2 sm:max-lg:grid-cols-3 lg:grid-cols-5  justify-between'>
                 <CardOne  title='Expert Instructor'
                           desc='find your right instructor here'
                           iconn={<SchoolIcon sx={{ fontSize:55  }} />}
                           />
                  <CardOne  title='Expert Instructor'
                           desc='find your right instructor here'
                           iconn={<LaptopIcon sx={{ fontSize:55  }} />}/> 
                  <CardOne  title='Expert Instructor'
                           desc='find your right instructor here'
                           iconn={<GroupIcon  sx={{ fontSize:55 }}/>}/>  
                   <CardOne  title='Expert Instructor'
                           desc='find your right instructor here'
                           iconn={<CardMembershipIcon  sx={{ fontSize:55  }}/>}/> 
                    <CardOne  title='Expert Instructor'
                           desc='find your right instructor here'
                           iconn={<VerifiedIcon sx={{ fontSize:55 }}/>}/>
                   
              </div>
           </div>
        </div>
            

            {/* section two */}
        <div className='mt-40 grid max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:flex justify-between  py-2'>
            <img src={p1} className='w-[400px] max-xs:w-[350px] md:max-lg:w-[350px] lg:max-xl:w-[320px] h-[470px] pt-14'/>
            <div className=' flex flex-col w-[550px] max-xs:w-[350px] md:max-lg:w-[400px] lg:max-xl:w-[400px] max-sm:px-2'>
              <p className='text-xl text-[#1F788C] font-bold'>about Abacus</p>
              <h1 className='text-[38px] max-sm:text-[20px]   font-bold'>Empowering  learner for a Brigheter Future</h1>
              <p className='text-xl max-sm:text-lg'>
              Lorem ipsum is a placeholder text commonly
               used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
              </p>
               <div className='flex'></div>
               <a href='/' className='bg-[#1F788C] text-white w-48 text-xl py-1.5 px-1 mt-5 text-center max-md:mb-3 '>more about Abacus </a>
            </div>
             <div className=''>
               <img src={p1} className='w-[250px] h-[330px] rounded-md '/>
               <img src={p2} className='w-[250px] lg:max-xl:w-[230px] lg:max-xl:right-4 h-[330px] bottom-48 right-20 relative rounded-md'/>

            </div>

        </div>

          {/* section three */}
        <div className='bg-[#0B1546] py-16 flex flex-col items-center gap-3'>
                <p1 className='text-white text-xl'> Courses Category</p1>
                <h1 className='text-white text-3xl font-semibold'>Explore Course Category</h1>

                <div className='grid max-sm:grid-cols-1  sm:max-lg:grid-cols-2 lg:grid-cols-3 bg-white rounded-md p-1'>
                  <div className='grid grid-cols-2'>
                    <CardTwo setHoverr={setIsHoverd1}   classNameTwo={`${!isHover1 ? 'text-gray-600' :'text-white' }`}  className={`border-r-2 border-b-2 ${isHover1 ? 'bg-blue-600' :'bg-white' } `}  title='design' desc='24 course'  iconn={ <VideoSettingsOutlinedIcon sx={{ fontSize:30 ,  color: !isHover1? '#025BFE':'white', }}/> }/>
                    <CardTwo  setHoverr={setIsHoverd2} classNameTwo={`${!isHover2 ? 'text-gray-600' :'text-white' }`}    className={`border-b-2 ${isHover2 ? 'bg-blue-600' :'bg-white' } `} title='developement' desc='24 course' iconn={ <CodeOffOutlinedIcon sx={{ fontSize:30,color: !isHover2? '#025BFE':'white', }}/> }/>
                    <CardTwo setHoverr={setIsHoverd3}  classNameTwo={`${!isHover3 ? 'text-gray-600' :'text-white' }`}   className={`md:max-lg:border-b-2 border-r-2 ${isHover3 ? 'bg-blue-600' :'bg-white' }  `} title=' marketing' desc='24 course' iconn={ <LanguageOutlinedIcon sx={{ fontSize:30 ,color: !isHover3? '#025BFE':'white', }}/> }/>
                    <CardTwo setHoverr={setIsHoverd4}  classNameTwo={`${!isHover4 ? 'text-gray-600' :'text-white' }`}  className={`md:max-lg:border-b-2 ${isHover4 ? 'bg-blue-600' :'bg-white' }  `} title='art and music' desc='24 course' iconn={ <AutoGraphOutlinedIcon sx={{ fontSize:30,color: !isHover4? '#025BFE':'white',  }}/> }/>

                  </div>
                  <div className='border-x-2 w-[350px] flex justify-center items-center ' >
                    <img src={person1}/>
                  </div>
                  <div className='grid grid-cols-2'>
                   <CardTwo setHoverr={setIsHoverd5}   classNameTwo={`${!isHover5 ? 'text-gray-600' :'text-white' }`}  className={`border-r-2 border-b-2 ${isHover5 ? 'bg-blue-600' :'bg-white' } `}  title='design' desc='24 course'  iconn={ <InstallMobileOutlinedIcon sx={{ fontSize:30 ,  color: !isHover5? '#025BFE':'white', }}/> }/>
                    <CardTwo  setHoverr={setIsHoverd6} classNameTwo={`${!isHover6 ? 'text-gray-600' :'text-white' }`}    className={`border-b-2 md:max-lg:border-r-2 ${isHover6 ? 'bg-blue-600' :'bg-white' } `} title='developement' desc='24 course' iconn={ <PivotTableChartOutlinedIcon sx={{ fontSize:30,color: !isHover6? '#025BFE':'white', }}/> }/>
                    <CardTwo setHoverr={setIsHoverd7}  classNameTwo={`${!isHover7 ? 'text-gray-600' :'text-white' }`}   className={`border-r-2 ${isHover7 ? 'bg-blue-600' :'bg-white' }  `} title=' marketing' desc='24 course' iconn={ < LocalConvenienceStoreOutlinedIcon sx={{ fontSize:30 ,color: !isHover7? '#025BFE':'white', }}/> }/>
                    <CardTwo setHoverr={setIsHoverd8}  classNameTwo={`${!isHover8 ? 'text-gray-600' :'text-white' }`}  className={` ${isHover8 ? 'bg-blue-600' :'bg-white' } md:max-lg:border-r-2  `} title='art and music' desc='24 course' iconn={ <CellTowerOutlinedIcon sx={{ fontSize:30,color: !isHover8? '#025BFE':'white',  }}/> }/>

                  </div>          
        
                </div>
                <p className='text-white text-xl py-4'>Find your best online course? <span className='text-yellow-600 font-bold'> <a href='/'>Get Started</a></span> </p>
        </div>

    
    
    
    </div>
  
  )
}

export default Home