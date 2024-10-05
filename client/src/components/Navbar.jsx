import { useState,useEffect } from "react"
import p1 from '../assets/p1.jpg'

import {Link} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const Navbar=()=>{
    const [transparent,setTrasparent]=useState(false)
    const [menu ,setMenu]=useState(false)

    useEffect(()=>{
        const handleTransparent=()=>{
            if(window.scrollY >=200){
                setTrasparent(true)
            }else{
                setTrasparent(false)
            }
        }
        window.addEventListener('scroll',handleTransparent)
        return ()=>{
            window.removeEventListener('scroll',handleTransparent)
        }
    },[])




    return(
        <div  style={{zIndex: 100,   }}  className={`  ${transparent ? 'bg-white ' : 'bg-transparent'}   ${transparent && 'fixed shadow-lg '}   w-[100%] `}>
                  
                  
                  <div className={`flex items-center justify-between px-7 md:max-lg:px-4 ${!transparent && 'homeOne'} h-28 w-[100%]  text-bold  ${transparent ? 'text-black' :'text-white'} `}>

                         <a href="/"> <div className="flex gap-2 items-center">  <img src={p1}  className="w-14 h-14 rounded-full"/> <span className={`text-[24px] md:max-lg:text-[19px] font-bold  `}>Abacus Courses</span> </div></a>
                         
                          <nav className=" hidden md:flex gap-4 text-[21px] md:max-lg:text-[18px]  md:max-lg:gap-2 items-center ">
                        
                            
                            <FormControl sx={{ width:100,'&:hover .MuiInputLabel-root': {color: 'yellow' },}}>
                              <InputLabel sx={{color: transparent ? 'black' : 'white', fontSize:'20px', }}  >Course</InputLabel>
                                <Select 
                                 sx={{ color:transparent ? 'white' :'black', width:120, 
                                 '.MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                  },
                                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                  },
                                  '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                  },
                                  '&.Mui-focused': {
                                    outline: 'none',
                                  },
                                   }}
                                label="Age"
                                
                                >
                                <MenuItem ><a href="/web">web development</a></MenuItem>
                                <MenuItem><a href='/web'>graphics design</a></MenuItem>
                                <MenuItem> <a href="/web">mobile development</a></MenuItem>
                                <MenuItem> <a href="/web">Digital marketing</a></MenuItem>
                                <MenuItem> <a href="/web">online working</a></MenuItem>
                                <MenuItem> <a href="/web">content creating</a></MenuItem>

                                </Select>
                            </FormControl>
                            <a href='/register' className="hover:text-yellow-500">   <span>Register</span></a> 
                            <a href='#aboutus' className="hover:text-yellow-500">   <span>About us</span></a> 
                            <a href='#whyus' className="hover:text-yellow-500">   <span>Why Us</span></a> 
                            <a href='#faq' className="hover:text-yellow-500">   <span>Faq</span></a> 
                            <a href='#contact' className="hover:text-yellow-500">   <span>Contact</span></a> 
                            <button className=" bg-[#1F788C] hover:bg-slate-500 text-lg px-3 py-[1px] text-white"><a href='/'>SignUp</a> </button>

                          </nav>

                          <button onClick={()=>setMenu(!menu)} className="md:hidden ">
                             <FormatAlignJustifyIcon />
                          </button>
                  
                  </div> 
                    {  (menu) && <div className="bg-white h-72 md:hidden absolute w-[100%] " style={{zIndex: 100,  }}>
                        <nav className="flex flex-col gap-2 text-xl " style={{ borderTop :transparent && '2px solid black' }}>
                        
                            
                        <FormControl sx={{ width:100,'&:hover .MuiInputLabel-root': {color: '#1F788C' },}}>
                          <InputLabel sx={{color:'black', fontSize:'20px', }}  >Course</InputLabel>
                            <Select 
                             sx={{ color:transparent ? 'white' :'black', width:120, 
                             '.MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                              },
                              '&.Mui-focused': {
                                outline: 'none',
                              },
                               }}
                            label="Age"
                            
                            >
                            <MenuItem ><a href="/">web development</a></MenuItem>
                            <MenuItem><a href='/'>graphics design</a></MenuItem>
                            <MenuItem> <a href="/">mobile development</a></MenuItem>
                            <MenuItem> <a href="/">Digital marketing</a></MenuItem>
                            <MenuItem> <a href="/">online working</a></MenuItem>
                            <MenuItem> <a href="/">content creating</a></MenuItem>

                            </Select>
                        </FormControl>
                        <a href='/' className="hover:text-[#1F788C] pl-4">   <span>Register</span></a> 
                        <a href='/' className="hover:text-[#1F788C]  pl-4">   <span>About us</span></a> 
                        <a href='/' className="hover:text-[#1F788C]  pl-4">   <span>Why Us</span></a> 
                        <a href='/' className="hover:text-[#1F788C]  pl-4">   <span>Faq</span></a> 
                        <a href='/' className="hover:text-[#1F788C]  pl-4">   <span>Contact</span></a> 
                        <button className=" bg-[#1F788C] hover:bg-slate-500 text-lg px-3 text-white w-28 ml-4"><a href='/'>SignUp</a> </button>

                        </nav>

                      </div>
                   }
          </div>
    )
}

export default Navbar