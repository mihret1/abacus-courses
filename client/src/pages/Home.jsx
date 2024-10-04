import React from 'react'
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

function Home() {
    const CardOne=(props)=>{
      return(
            <div className=' flex  flex-col items-center justify-center'>
                 <div >{props.iconn}</div>
                <p1 className='text-[23px] font-semibold text-center'>{props.title}</p1>
                <p1 className='text-center'>{props.desc} </p1>
            </div>
            )
    }
  return (
    <div className='h-[2000px] flex flex-col gap-40'>
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
       <div className='grid max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:flex justify-between  py-2'>
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
    </div>
  
  )
}

export default Home