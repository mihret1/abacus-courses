





import React, { useState } from 'react'
import Navbar from '../components/Navbar'


import img1 from '../assets/co3.jpg'
import img2 from '../assets/co4.jpg'
import img3 from '../assets/co5.jpg'
import img4 from '../assets/co6.jpg'



function Courses() {

    const CardOne=(props)=>{
        return(
            <div className='pt-14 max-sm:w-[95%]  sm:max-md:w-[520px] md:max-mdd:w-[400px] mdd:max-lg:w-[430px] lg:max-xl:w-[500px] xl:w-[570px] px-4 flex flex-col gap-1'>
                
                <img  src={props.imgg} className='w-[95%] max-sm:h-[220px] sm:max-lg:h-[270px] lg:h-[310px]' />
                <h1 className='text-2xl font-semibold'>{props.title}</h1>
                <p className='text-lg'>{props.desc}</p>
                 <a href={props.path} className='w-40 bg-blue-500 px-4 py-2 flex justify-center text-white text-lg'>read more</a>

                

            </div>
        )
    }

    

  return (
    <div className=''>
        <div className=' h-[270px] bg-[#0B1546]'>
            <Navbar />
            <span className='text-white text-2xl  flex  justify-center pt-20'>See all the Courses</span>
        </div>
        
        <div className='grid grid-cols-2 place-items-center  gap-y-10 gap-x-5 max-md:grid-cols-1 justify-center items-center'>
            <CardOne 
            path='/'
            imgg={img1}
            title='Web development'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            />
            <CardOne 
            imgg={img2}
            title='Graphic design'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            /><CardOne 
            imgg={img3}
            title='mobile development'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            /><CardOne 
            imgg={img4}
            title='vidio editing'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            /><CardOne 
            imgg={img2}
            title='Web development'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            /><CardOne 
            imgg={img1}
            title='Web development'
            desc=' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available'
            />
            
        </div>

        
    </div>
  )
}

export default Courses