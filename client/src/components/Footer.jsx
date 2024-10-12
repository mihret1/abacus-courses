
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import p1 from '../assets/p1.jpg'
import { Stack, Typography } from '@mui/material';
function Footer() {
  return (
    <div id="contact">
       
    <div className='gap-8 py-10 bg-[#000D1D] h-96 text-white flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Eagle Training Center</h1>
         
         
        
        <div className='flex gap-2 text-white'>
            <a href='https://instagram.com/eagle_training_center' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><InstagramIcon /></a>
            <a href='https://tiktok.com/eagletraingingcenter'  className='flex justify-center items-center w-12 h-12 rounded-full border-[1px] tetx-xl font-bold'>T</a>
            <a href='https://t.me/eagledigitalmarketing68' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><TelegramIcon /></a>
            <a href='https://youtube.com/@eagletrainingcenter68?si=ndripREO5SRzH1Vn' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><YouTubeIcon  /></a>
            <a href='https://www.facebook.com/profile.php?id=61561701272107&mibextid=ZbWKwL' className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><FacebookOutlinedIcon  /></a>

        
        </div>
        <div className='flex gap-5 max-sm:gap-2 text-xl font-semibold'>
           <a href='#course' className="hover:text-[#1F788C]"> <span>Course</span></a> 
           <a href='#opportunity' className="hover:text-[#1F788C]"><span>Opportunity</span></a> 
           <a href='#faq' className="hover:text-[#1F788C]">   <span>Faq</span></a> 
          <a href='#interested' className="hover:text-[#1F788C]">   <span>Interested</span></a> 
             
        </div>
        <a href='#register' className='bg-white text-lg  hover:bg-[#7fcddf]  font-semibold rounded-md text-black px-3 py-2'>Register Course</a>
      
    </div>
    <Stack direction={{ sm:'row' }} paddingY={1.4} paddingX={5} color='white' spacing={5} width='100%' alignItems='center' justifyContent='space-between' bgcolor='black'>
    <p className='max-sm:text-center'>@2024 Eagle Traning Center All Rights Reserved</p>
    <p>Term & Condition</p>
</Stack>
</div>
)
}

export default Footer