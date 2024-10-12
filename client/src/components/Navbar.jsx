import { useState,useEffect } from "react"
import p1 from '../assets/p1.jpg'
import logo from '../assets/logoo.jpg'

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
                  
                  
                  <div className={`flex items-center justify-between px-7 max-sm:px-2 md:max-lg:px-4 ${!transparent && 'homeOne'} h-24 w-[100%]  text-bold  ${transparent ? 'text-black' :'text-white'} `}>

                         <a href="/"> <div className="flex gap-2 items-center">  <img src={logo}  className="w-16 h-16 rounded-full"/> <span className={`text-[24px] md:max-lg:text-[19px] max-sm:[18px] font-bold  `}>Eagle Training Center</span> </div></a>
                         
                          <nav className=" hidden md:flex gap-4 text-[21px] md:max-lg:text-[18px]  md:max-lg:gap-2 items-center ">
                        
                            <a href='#course' className="hover:text-yellow-500">   <span>Course</span></a> 
                            <a href='#register' className="hover:text-yellow-500">   <span>Register</span></a> 
                            <a href='#opportunity' className="hover:text-yellow-500">   <span>Opportunity</span></a> 
                            <a href='#faq' className="hover:text-yellow-500">   <span>Faq</span></a> 

                            <button className=" bg-[#000D1D]  hover:text-yellow-500 text-lg px-3 py-[1px] text-white"><a href='#interested'>SignUp</a> </button>

                          </nav>

                          <button onClick={()=>setMenu(!menu)} className="md:hidden ">
                             <FormatAlignJustifyIcon />
                          </button>
                  
                  </div> 
                    {  (menu) && <div className="bg-white h-44 md:hidden absolute w-[100%] " style={{zIndex: 100,  }}>
                        <nav className="flex flex-col gap-2 text-xl " style={{ borderTop :transparent && '2px solid black' }}>
                        
                            
                            <a href='#course' className="hover:text-yellow-500">   <span>Course</span></a> 
                            <a href='#register' className="hover:text-yellow-500">   <span>Register</span></a> 
                            <a href='#opportunity' className="hover:text-yellow-500">   <span>Opportunity</span></a> 
                            <a href='#faq' className="hover:text-yellow-500">   <span>Faq</span></a> 

                        <button className=" bg-[#1F788C] hover:bg-slate-500 text-lg px-3 text-white w-28 ml-4"><a href='#interested'>SignUp</a> </button>

                        </nav>

                      </div>
                   }
          </div>
    )
}

export default Navbar