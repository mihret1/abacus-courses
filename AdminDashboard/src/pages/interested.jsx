import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../asset/co3.jpg'

function Interested () {
  const [students,setStudents]=useState([])
  useEffect(()=>{
    const getResult=async()=>{
    const  { data} = await axios.get('http://localhost:1000/interested')
    setStudents(data)
    }
    getResult()

  },[students])

  const handleDelete=async(_id)=>{
    try{
      const {data}=await axios.delete(`http://localhost:1000/interested/${_id}`)
      console.log(data)
    }catch(error){
      console.log(error)
    }

  }


  return (
    <div>
      <div className='flex justify-between text-3xl text-white h-20 bg-cyan-600  items-center px-4'>
        <span> All Interested  Students</span>
        <a href='/student' className='text-xl hover:text-yellow-400 bg-gray-600 px-3 py-1 rounded-md'>Registerd students</a>
    </div>
        <div className='flex flex-col p-4 gap-3' >
              
              {students.map((item,index)=>(
                 <div key={item.key} className='flex gap-3 border-2 rounded-lg p-3   '>
                    <div className='text-xl font-semibold'>{index+1}.</div>
                    <div className='flex flex-col gap-1  '>
                        <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Name:</span><span className='text-xl'>{item.fullname}</span></div> 
                        <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Phone number:</span><span className='text-xl'>{item.phoneNumber}</span></div> 
                        <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Email:</span><span className='text-xl'>{item.email}</span></div> 
                        <button onClick={()=>handleDelete(item._id)} className='px-3 text-white w-28 py-1 bg-red-500'>Delete</button>
                    </div>
                 </div>
              ))}
              
        </div>
        
    </div>
  )
}

export default Interested