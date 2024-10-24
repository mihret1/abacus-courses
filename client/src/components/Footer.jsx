
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import p1 from '../assets/p1.jpg'
import { Stack, Typography } from '@mui/material';
import logo from '../assets/logoo.jpg'

import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Footer() {
  return (
    <div id="contact">
       
    <div className='grid grid-cols-3  max-md:grid-cols-1 md:max-lg:grid-cols-2 px-20 max-md:px-5 justify-center   gap-8 py-10 bg-[#000D1D] text-white  '>
        <div className='flex flex-col gap-3 max-sm:w-[340px] sm:max-md:w-[400px]    ' >
            <a href="/"> <div className="flex gap-1 items-center"> 
               <img src={logo}  className="w-20 h-16 "/>
               <span className={`text-2xl max-sm:text-lg  font-bold  `}>Eagle Training Center</span> 
               </div>
            </a>
            <p className='text-[#FFFFFF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type
               and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <p className='text-lg font-bold'>Social Media</p>
            <div className='flex gap-2 text-white'>
               
                <a href='https://instagram.com/eagle_training_center' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><InstagramIcon /></a>
                <a href='https://tiktok.com/eagletraingingcenter'  className='flex justify-center items-center w-12 h-12 rounded-full border-[1px] tetx-xl font-bold'>T</a>
                <a href='https://t.me/eagledigitalmarketing68' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><TelegramIcon /></a>
                <a href='https://youtube.com/@eagletrainingcenter68?si=ndripREO5SRzH1Vn' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><YouTubeIcon  /></a>
                <a href='https://www.facebook.com/profile.php?id=61561701272107&mibextid=ZbWKwL' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><FacebookOutlinedIcon  /></a>

            
        </div>
            {/* <div className='flex gap-5 max-sm:gap-2 text-xl font-semibold'>
              <a href='#course' className="hover:text-[#1F788C]"> <span>Course</span></a> 
              <a href='#opportunity' className="hover:text-[#1F788C]"><span>Opportunity</span></a> 
              <a href='#faq' className="hover:text-[#1F788C]">   <span>Faq</span></a> 
              <a href='#interested' className="hover:text-[#1F788C]">   <span>Interested</span></a> 
                
            </div>
            <a href='#register' className='bg-white text-lg w-40 hover:bg-[#7fcddf]  font-semibold rounded-md text-black px-3 py-2'>Register Course</a>
            */}
        </div>
        <div className='text-lg flex flex-col  md:items-center '>
           <div className='flex flex-col gap-2   '>
              <p className='text-2xl pb-2 pt-3 font-semibold'>Work Opportunities</p>
              <p><TaskAltIcon /> Online Shopping</p>
              <p><TaskAltIcon /> Paid Adversitment</p>
              <p><TaskAltIcon /> Upwork</p>
              <p><TaskAltIcon /> Drop shipping</p>
             
            </div>
          
        </div>
        <div className=' text-xl flex flex-col  md:items-center '>
           <div className='flex flex-col   '>
           <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61561701272107&tabs=timeline&width=340&height=330&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="350" height="330" 
              className='max-xs:w-[340px]'
              style={{ border:'none',overflow:'hidden', scrolling:"no" }}
             frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

          </iframe>
            
            </div>
        </div>
    </div>
    <Stack direction={{ sm:'row' }} paddingY={1.4} paddingX={5} color='white' spacing={5} width='100%' alignItems='center' justifyContent='space-between' bgcolor='black'>
        <p className='max-sm:text-center'>@2024 Eagle Traning Center All Rights Reserved</p>
        <p>Term & Condition</p>
    </Stack>
</div>
)
}

export default Footer