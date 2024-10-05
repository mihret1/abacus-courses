
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


import p1 from '../assets/p1.jpg'
import { Stack, Typography } from '@mui/material';
function Footer() {
  return (
    <div id="contact">
    <div className='gap-8 py-10 bg-[#0B1546] h-96 text-white flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Abacus Course</h1>
        <div className='flex gap-2 text-white'>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><InstagramIcon /></div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><TwitterIcon  /></div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><LinkedInIcon /></div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><YouTubeIcon  /></div>
            <div className='flex justify-center items-center w-12 h-12 rounded-full border-[1px]'><FacebookOutlinedIcon  /></div>

        
        </div>
        <div className='flex gap-5 text-xl font-semibold'>
        <a href='/' className="hover:text-[#1F788C]">   <span>Home</span></a> 
           <a href='/' className="hover:text-[#1F788C]">   <span>Why Us</span></a> 
           <a href='/' className="hover:text-[#1F788C]">   <span>Faq</span></a> 
             <a href='/' className="hover:text-[#1F788C]">   <span>About us</span></a> 
             
        </div>
        <a href='/' className='bg-white text-lg  hover:bg-[#7fcddf]  font-semibold rounded-md text-black px-3 py-2'>Register Course</a>
      
    </div>
    <Stack direction={{ sm:'row' }} paddingY={1.4} paddingX={5} color='white' spacing={5} width='100%' alignItems='center' justifyContent='space-between' bgcolor='black'>
    <Typography>@2024 Abacus All Rights Reserved</Typography>
    <Typography>Term & Condition</Typography>
</Stack>
</div>
)
}

export default Footer