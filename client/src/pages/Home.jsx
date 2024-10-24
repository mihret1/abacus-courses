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
import person2 from '../assets/person2.jpg'


import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'


import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
import PivotTableChartOutlinedIcon from '@mui/icons-material/PivotTableChartOutlined';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { IconButton, Typography } from '@mui/material';

import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';

import ComputerIcon from '@mui/icons-material/Computer';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Register from './Register';
import banner from '../assets/banner.jpg'
import opportunity from '../assets/faq.mp4'
import faq from '../assets/opportunity.mp4'

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress'; // MUI Loading Spinner
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ClearIcon from '@mui/icons-material/Clear';

function Home() {


  const [expanded, setExpanded] = useState(false); // State to track expanded accordion
  const [expandedInner, setExpandedInner] = useState(false); // State to track expanded accordion

  const [interestedName,setInteresetedName]=useState('')
  const [interestedPhone,setInterestedPhone]=useState('')
  const [interestedEmail,setInteresetedEmail]=useState('')
  const [interesetdField,setInterestedField]=useState(false)
  const [interestedError,setInterestedError]=useState(false)
  const [interesetdLoading,setInterestedLoading]=useState(false)
  const [interestedSucess,setInterestedSucess]=useState(false)
  
  const [interstedMessageControl,setInterestedMessageControl]=useState(false)
  const [interstedErrorMessageControl,setInterestedErrorMessageControl]=useState(false)



  const handleInterestedRegisteration=async(e)=>{
     e. preventDefault()
     setInterestedLoading(true)
     setInterestedField(false)
     setInterestedError(false)
     setInterestedSucess(false)
     
     try{
      if (!interestedName || !interestedPhone || !interestedEmail){
        setInterestedField(true)
        setInterestedLoading(false)
        return
      }
      const {data}= await axios.post('http://localhost:1000/interested',{fullname:interestedName,phoneNumber:interestedPhone,email:interestedEmail})
          console.log(data)
          setInteresetedName('')
          setInterestedPhone('')
          setInteresetedEmail('')
          setInterestedField(false)
          setInterestedSucess(true)
          setInterestedLoading(false)
      }catch(error){
        
      console.log(error)
      setInterestedError(true)
      setInterestedField(false)
      setInterestedLoading(false)
      setInterestedSucess(false)
     }
    
    }


  const handleChange = (panel) => (event, isExpanded) => {
    // Toggle the accordion state
    setExpanded(isExpanded ? panel : false);
  };

  const handleInnerChange = (panell) => (event, isInnerExpanded) => {
    // Toggle the accordion state
    setExpandedInner(isInnerExpanded ? panell : false);
  };

   
   

  return (
    <div className=' flex flex-col '>
          
          
        {/* section one */}
        <div  className=''   style={{
          backgroundImage:`url(${banner})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover' 
          }}>
              <Navbar />
              <div className='homeOne    flex flex-col items-center justify-center gap-5  pb-24 h-[100%] w-[100%] text-white text-bold pt-12 max-sm:pt-6'>
                            <p className='bg-gradient-to-r from-pink-500  via-purple-500 to-pink-500 bg-clip-text text-transparent  text-[35px] font-bold text-center'>Introduction to Digital Marketing</p>
                           <iframe 
                            className='max-sm:w-[90%] sm:max-md:w-[80%] md:max-lg:w-[70%]  w-[65%]  h-[500px] max-sm:h-[270px] sm:max-mdd:[370px] rounded-xl'
                            loading="lazy" 
                            title="Web Development" 
                            src="https://www.youtube.com/embed/RkmpVOTs7Es?autoplay=1&mute=1&loop=1&playlist=RkmpVOTs7Es" 
                            frameBorder="0" 
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>

              </div>
        </div>
  
         {/* section two */}
         <div className='pt-24 ' id="course">
            <p className='text-[36px] text-center font-bold py-5 bg-gradient-to-r from-pink-500   via-purple-500  to-pink-600  bg-clip-text text-transparent'>Digital Marketing Course </p>
            <div  className='flex max-md:flex-col justify-center gap-10 max-mdd:gap-4 pt-5 px-2 mdd:px-16 '>
                    <div className='flex  justify-center items-center h-[380px] w-[650px] max-xs:w-[340px] xs:max-md:w-[90%]  '>
                      <iframe 
                            className='w-[100%] h-[100%] rounded-xl'
                            loading="lazy" 
                            title="Web Developement" 
                            src="https://www.youtube.com/embed/RkmpVOTs7Es?si=itWVyqaoth8Q_r02" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

                      </iframe>
                    </div>
                    <div className='w-[700px] max-xs:w-[340px] xs:max-md:w-[90%]    flex flex-col gap-y-2 '>
                        <p className='text-3xl  max-sm:text-2xl font-bold bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 bg-clip-text text-transparent'>Course Outline</p>
                      
                        <div className='  flex flex-col '>
                          <Accordion sx={{ backgroundColor:expanded == 'panel1' && '#F4F9FF', }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header"  expandIcon={<ExpandMoreIcon />}>
                              <Typography>{expanded !== 'panel1' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />}Lecture</Typography>
                            </AccordionSummary>
                            <AccordionDetails >

                                <Accordion sx={{ backgroundColor:expanded == 'panell1' && '#F4F9FF', }} expanded={expandedInner === 'panell1'} onChange={handleInnerChange('panell1')}>
                                <AccordionSummary  aria-controls="panell1d-content" id="panell1d-header"  expandIcon={<ExpandMoreIcon />}>
                                  <Typography>{expandedInner !== 'panell1' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Facebbook</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                  <div className='flex flex-col'>
                                      <span> 1. Introduction to Facebook</span>
                                      <span>  2. Meta Business Suite</span>
                                      <span>  3. How the Facebook Algorithm Work?</span>
                                      <span> 4. Facebook Marketing </span>
                                      <span> 5. Facebook Boost</span>
                                      <span> 6. Facebook Ad Campaign Part One</span>
                                      <span>  7. Facebook Ad Campaign Part Two</span>
                                  </div>
                                </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor:expanded == 'panell2' && '#F4F9FF', }} expanded={expandedInner === 'panell2'} onChange={handleInnerChange('panell2')}>
                                  <AccordionSummary  aria-controls="panell2d-content" id="panell2d-header"  expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{expandedInner !== 'panell2' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Instagram</Typography>
                                  </AccordionSummary>
                                <AccordionDetails >
                                  <div className='flex flex-col'>
                                  <span> 1. Introduction to Instagram </span>
                                    <span>  2. Features of Instagram</span>
                                    <span>  3.How the Instagram Algorithm Work?</span>
                                    <span> 4.Instagram Marketing</span>
                                  </div>
                              </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor:expanded == 'panell3' && '#F4F9FF', }} expanded={expandedInner === 'panell3'} onChange={handleInnerChange('panell3')}>
                                  <AccordionSummary  aria-controls="panell3d-content" id="panell3d-header"  expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{expandedInner !== 'panell3' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} TikTok</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails >
                                    <div className='flex flex-col'>
                                    <span> 1. Introduction to Tik Tok </span>
                                    <span> 2. How the Tik Tok Algorithm Work?</span>
                                    <span>3.How To Grow Tik Tok Account?</span>
                                  </div>
                              </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor:expanded == 'panell4' && '#F4F9FF', }} expanded={expandedInner === 'panell4'} onChange={handleInnerChange('panell4')}>
                                <AccordionSummary  aria-controls="panell4d-content" id="panell4d-header"  expandIcon={<ExpandMoreIcon />}>
                                  <Typography>{expandedInner !== 'panell4' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} YouTube</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                  <div className='flex flex-col'>
                                  <span> 1. Introduction to YouTube</span>
                                  <span> 2. How the YouTube Algorithms work? Part One</span>
                                    <span> 3. How the YouTube Algorithms work? Part Two</span>
                                    <span>4. How to grow YouTube Channel? Part One </span>
                                    <span> 5. How to grow YouTube Channel? Part Two</span>
                                  
                                  </div>
                              </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ backgroundColor:expanded == 'panell5' && '#F4F9FF', }} expanded={expandedInner === 'panell5'} onChange={handleInnerChange('panell5')}>
                                  <AccordionSummary  aria-controls="panell5d-content" id="panell5d-header"  expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{expandedInner !== 'panell5' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Q&A Live Session using Google Meet</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails >
                                    <div className='flex flex-col'>
                                      <span> 1. Facebook Q&A Live Session using Google Meet</span>
                                      <span> 2. Instagram Q&A Live Session using Google Meet</span>
                                      <span> 3. Tik Tok Q&A Live Session using Google Meet</span>
                                      <span>4. YouTube Q&A Live Session using Google Meet</span>
                                      
                                    </div>
                              </AccordionDetails>
                                </Accordion>




                          </AccordionDetails>
                          </Accordion>
                  
                          <Accordion sx={{ backgroundColor:expanded == 'panel2' && '#F4F9FF', }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"  expandIcon={<ExpandMoreIcon />}>
                              <Typography> {expanded !== 'panel2' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />}Quiz</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className='flex flex-col'>
                              <span> 1.Facebook quiz (10%) </span>
                              <span> 2.Instagram quiz (10%)</span>
                                <span>3.Tiktok quiz (10%)</span>
                                <span>4.Youtube quiz (10%)</span>
                                <span>5.Final Exam (100%)</span>
                                
                              </div>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion sx={{ backgroundColor:expanded == 'panel3' && '#F4F9FF', }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"  expandIcon={<ExpandMoreIcon />}>
                              <Typography> {expanded !== 'panel3' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Certeficate</Typography>
                            </AccordionSummary>
                          
                          </Accordion>
                  
                    
                        </div>
                    
                    </div>
            </div>
         </div>    


         {/* section three */}
         <Register />
            

          {/* section four */}
          <div id='opportunity' className='py-40  flex flex-col'>
             <p className='text-[36px] pb-10 text-center font-bold  bg-gradient-to-r from-[#0B1546]  via-purple-500  to-pink-600  bg-clip-text text-transparent'>Work Opportunities </p>

             <div className='flex max-md:flex-col max-md:items-center justify-center gap-10  px-2 mb-4'>
                <div className=''>

                    <iframe 
                            className='h-[450px] xs:w-[310px] '
                             loading="lazy" 
                            title="Web Developement" 
                            src="https://www.youtube.com/embed/uZTRKD6WZDQ?autoplay=1&mute=1&loop=1&playlist=uZTRKD6WZDQ" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

                      </iframe>
                  {/* <video
                  controls 
                  src={faq}
                  autoPlay 
                  muted 
                  loop 

                  className='h-[450px] xs:w-[350px] '>

                  </video> */}
                </div>

                <div className='w-[700px] max-xs:w-[340px] xs:max-md:w-[90%]    flex flex-col gap-y-2 '>
                  <p className='text-[32px] max-sm:text-2xl font-bold bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 bg-clip-text text-transparent'>For Learning Digital Marketing</p>
                  <div className='  flex flex-col '>
                  <Accordion sx={{ backgroundColor:expanded == 'panel1' && '#F4F9FF', }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header"  expandIcon={<ExpandMoreIcon />}>
                  <p className='text-xl'>{expanded !== 'panel1' ? <TaskAltIcon /> : <HighlightOffIcon />}&nbsp; Online shopping</p>
                </AccordionSummary>
                <AccordionDetails >
                  <Typography>
                  Digital marketing, which is changing many lives nowadays  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor:expanded == 'panel2' && '#F4F9FF', }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"  expandIcon={<ExpandMoreIcon />}>
                  <p className='text-xl'> {expanded !== 'panel2' ? <TaskAltIcon /> : <HighlightOffIcon />}&nbsp; Paid Advertisement</p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Only Two weeks
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor:expanded == 'panel3' && '#F4F9FF', }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"  expandIcon={<ExpandMoreIcon />}>
                  <p className='text-xl'> {expanded !== 'panel3' ? <TaskAltIcon /> : <HighlightOffIcon />}&nbsp; Upwork </p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='flex flex-col' >
                    <span>1. Smart phone or computer</span>
                    <span>2. internet connection</span>
                    <span>3. 3500ETB only for payment </span>

                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion  sx={{ backgroundColor:expanded == 'panel4' && '#F4F9FF', }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header"  expandIcon={<ExpandMoreIcon />}>
                  <p className='text-xl'>{expanded !== 'panel4' ? <TaskAltIcon/> : <HighlightOffIcon />} &nbsp; Drop Shipping </p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='flex flex-col'>
                  <span>1. Inperson - Addis Ababa Bole Medhinalem Alem dessu Bldg, 6th floor 607A</span>
                    <span>2.Online - using our website</span>
                    <span>3.By calling 0988246119 or 0954265503 </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            
              
              </div>
                </div>
       
             </div>
        
          </div>
        
      

         {/* section five */}
        <div id="faq" className='flex max-md:flex-col max-md:items-center justify-center gap-10  px-2 mb-4'>
          
          <div className='w-[700px] max-xs:w-[340px] xs:max-md:w-[90%]    flex flex-col gap-y-2 '>
            <p className='text-[40px] max-sm:text-2xl font-bold bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 bg-clip-text text-transparent'>Frequently Asked Question</p>
            <div className='  flex flex-col '>
            <Accordion sx={{ backgroundColor:expanded == 'panel1' && '#F4F9FF', }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography>{expanded !== 'panel1' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />}What course is teach by eagle training center</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
            Digital marketing, which is changing many lives nowadays  </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor:expanded == 'panel2' && '#F4F9FF', }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography> {expanded !== 'panel2' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />}How long does the course take?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Only Two weeks
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor:expanded == 'panel3' && '#F4F9FF', }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography> {expanded !== 'panel3' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />}What do we need to learn for the course?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col' >
              <span>1. Smart phone or computer</span>
              <span>2. internet connection</span>
              <span>3. 3500ETB only for payment </span>

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{ backgroundColor:expanded == 'panel4' && '#F4F9FF', }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography>{expanded !== 'panel4' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Where and how can I register?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col'>
            <span>1. Inperson - Addis Ababa Bole Medhinalem Alem dessu Bldg, 6th floor 607A</span>
              <span>2.Online - using our website</span>
              <span>3.By calling 0988246119 or 0954265503 </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor:expanded == 'panel5' && '#F4F9FF', }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography>{expanded !== 'panel5' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Is the course online or in person</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is online course so you can learn it anywhere you are and want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion sx={{ backgroundColor:expanded == 'panel6' && '#F4F9FF', }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header"  expandIcon={<ExpandMoreIcon />}>
            <Typography>{expanded !== 'panel6' ? <ArrowCircleRightOutlinedIcon /> : <HighlightOffIcon />} Is there discounts ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. 
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        </div>
          </div>
          <div className=' '>
                  <iframe 
                            className='h-[450px] xs:w-[310px] '
                             loading="lazy" 
                            title="Web Developement" 
                            src="https://www.youtube.com/embed/qsTUCnJ4no8?autoplay=1&mute=1&loop=1&playlist=qsTUCnJ4no8" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

                      </iframe>
            {/* <video
            controls 
            src={opportunity}
            autoPlay 
            muted 
            loop 

            className='h-[450px] xs:w-[350px] '
            
              >

            </video> */}
          </div>
        </div>


          {/* section six */}
          <div id='interested' className='flex flex-col items-center pt-32 pb-5 gap-2 px-3'>
             
             <p className='text-3xl text-center font-semibold bg-gradient-to-r from-[#0B1546] via-purple-500 to-pink-500 bg-clip-text text-transparent'>You want to learn and unable to do it, Signup  </p>
             <span className=''>
              <input type='text' placeholder='fullname...' className='border w-[500px] max-sm:w-[335px] h-10 px-3 outline-none  border-purple-400' 
                    value={interestedName}   onChange={(e)=>setInteresetedName(e.target.value)}/>
              </span> 
             <span> <input type='text ' placeholder='phone number... ' className='border w-[500px] max-sm:w-[335px] h-10 px-3 outline-none border-purple-400' 
                          value={interestedPhone}   onChange={(e)=>setInterestedPhone(e.target.value)}
             /></span> 
             <span> <input type='email' placeholder='email...' className='border w-[500px] h-10 max-sm:w-[335px] px-3 outline-none border-purple-400'
                     value={interestedEmail}   onChange={(e)=>setInteresetedEmail(e.target.value)}
              /></span> 
              {interesetdLoading && <span className='text-center'><CircularProgress /></span>}
             <button 
                onClick={handleInterestedRegisteration}
                className='border  text-xl text-white w-72 max-sm:w-48 py-2 bg-gradient-to-r from-[#0B1546]  to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-[#0B1546] '>
                  Signup
             </button>
             <p className='text-center text-red-600 text-lg'>{interesetdField && 'Enter All field'}</p>
             
             {(interestedError && !interstedErrorMessageControl) && <p className='text-center text-red-700 w-[500px] max-sm:w-[300p] '>
               <div className='flex justify-between w-full bg-[#FDEDED] px-3 py-3 text-lg '>
                  <div><ErrorOutlineIcon />  Sorry, Unable to register </div>
                 <button onClick={()=>setInterestedErrorMessageControl(true)}><ClearIcon /> </button>
               </div>
            </p>
            }
             
             {(interestedSucess && !interstedMessageControl) && <p className='text-center text-green-600 w-[500px] max-sm:w-[300p]'>
              <div className='flex justify-between w-full bg-[#EDF7ED] px-3 py-3 text-lg'>
                <div>
                 <CheckIcon />  Nice!, You are registered
                </div>
                <button onClick={()=>setInterestedMessageControl(true)}><ClearIcon /> </button>

              </div> 
             </p>}

          </div>



          {/* footer */}
          <Footer />

    </div>
  
  )
}

export default Home