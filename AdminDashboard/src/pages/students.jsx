import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../asset/co3.jpg'
import CommenPart from '../components/CommenPart'



const StudentsPart=()=>{
  const [students,setStudents]=useState([])
  const [statuss,setStatus]=useState('')
  const [updateIt,setUpdateIt]=useState('')

  useEffect(()=>{

    const getResult=async()=>{
      try{
        const  { data} = await axios.get('http://localhost:1000/student')
        setStudents(data)
      }catch(error){console.log(error)}
   
    }
    getResult()

  },[students])

  const handleDelete=async(_id)=>{
     const {data}=await axios.delete(`http://localhost:1000/student/${_id}`)
     console.log(data)
  }

  const handleUpdate=async(_id,e)=>{
    e.preventDefault()
   try{ const {data}=await axios.put(`http://localhost:1000/student/${_id}`,{statu:statuss})
    console.log(data)
    setStatus('')
    setUpdateIt('')}
    catch(error){
      console.log(error)
    }
  }

  return(
    <div>
    <div className='flex justify-between text-3xl text-white h-20 bg-cyan-600  items-center px-4'>
   <span> All Registerd Students</span>
   <a href='/interested' className='text-xl hover:text-yellow-400 bg-gray-600 px-3 py-1 rounded-md'>interested students</a>
    </div>
   <div className='flex flex-col p-4 gap-3' >
         
         {students.map((item,index)=>(
            <div key={item.key} className='flex gap-3 border-2 rounded-lg p-3   '>
               <div className='text-xl font-semibold'>{index+1}.</div>
               <div className='flex flex-col gap-1  '>
                   <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Name:</span><span className='text-xl'>{item.fullname}</span></div> 
                   <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Phone number:</span><span className='text-xl'>{item.phone}</span></div> 
                   <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Account number:</span><span className='text-xl'>{item.account}</span></div> 
                   <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Status:</span><span className='text-xl'>{item.statu}</span></div> 

                   <div className='flex flex-col'> 
                     <span className='text-xl font-serif'>Reciept:</span>
                     <img className='w-[500px] max-xs:w-[340px]  max-xs:h-[200px] h-[250px]' src={item.reciept}/>
                   </div> 
                   
                  {(updateIt ===item._id )&& <form onSubmit={(e)=>handleUpdate(item._id,e)} className=' flex py-2 gap-2'>
                       <span className='text-xl'>Update Progress:</span> 
                       <select value={statuss} onChange={(e)=>setStatus(e.target.value)} className='border-2 px-2 py-1 '> 
                         <option value='inprogress'>inprogress</option>
                         <option value='completed'>completed</option>
                       </select>
                       <button 
                       type='submit'
                       // onClick={()=>handleUpdate(item._id)}
                        className='bg-blue-400 px-3 py-1 rounded-md font-semibold'>Done</button>
                   </form>}

                   <div className='flex gap-10 py-2'>
                     <button onClick={()=>{setUpdateIt(item._id)}} className='bg-blue-400 px-3 py-1 rounded-md font-semibold'>Update</button>
                     <button onClick={()=>handleDelete(item._id)} className='bg-red-400 px-3 py-1 rounded-md  font-semibold'>Delete</button>
                   </div>
               </div>
            </div>
         ))}
         
   </div>
  
    </div>  
  )
}



function Student () {


  return (
   <CommenPart>
      <StudentsPart />
   </CommenPart>
  )
}

export default Student












// function Student () {
//   const [students,setStudents]=useState([])
//   const [statuss,setStatus]=useState('')
//   const [updateIt,setUpdateIt]=useState('')

//   useEffect(()=>{

//     const getResult=async()=>{
//       try{
//         const  { data} = await axios.get('http://localhost:1000/student')
//         setStudents(data)
//       }catch(error){console.log(error)}
   
//     }
//     getResult()

//   },[students])

//   const handleDelete=async(_id)=>{
//      const {data}=await axios.delete(`http://localhost:1000/student/${_id}`)
//      console.log(data)
//   }

//   const handleUpdate=async(_id,e)=>{
//     e.preventDefault()
//    try{ const {data}=await axios.put(`http://localhost:1000/student/${_id}`,{statu:statuss})
//     console.log(data)
//     setStatus('')
//     setUpdateIt('')}
//     catch(error){
//       console.log(error)
//     }
//   }


//   return (
//     <div>
//          <div className='flex justify-between text-3xl text-white h-20 bg-cyan-600  items-center px-4'>
//         <span> All Registerd Students</span>
//         <a href='/interested' className='text-xl hover:text-yellow-400 bg-gray-600 px-3 py-1 rounded-md'>interested students</a>
//          </div>
//         <div className='flex flex-col p-4 gap-3' >
              
//               {students.map((item,index)=>(
//                  <div key={item.key} className='flex gap-3 border-2 rounded-lg p-3   '>
//                     <div className='text-xl font-semibold'>{index+1}.</div>
//                     <div className='flex flex-col gap-1  '>
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Name:</span><span className='text-xl'>{item.fullname}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Phone number:</span><span className='text-xl'>{item.phone}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Account number:</span><span className='text-xl'>{item.account}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Status:</span><span className='text-xl'>{item.statu}</span></div> 

//                         <div className='flex flex-col'> 
//                           <span className='text-xl font-serif'>Reciept:</span>
//                           <img className='w-[500px] max-xs:w-[340px]  max-xs:h-[200px] h-[250px]' src={item.reciept}/>
//                         </div> 
                        
//                        {(updateIt ===item._id )&& <form onSubmit={(e)=>handleUpdate(item._id,e)} className=' flex py-2 gap-2'>
//                             <span className='text-xl'>Update Progress:</span> 
//                             <select value={statuss} onChange={(e)=>setStatus(e.target.value)} className='border-2 px-2 py-1 '> 
//                               <option value='inprogress'>inprogress</option>
//                               <option value='completed'>completed</option>
//                             </select>
//                             <button 
//                             type='submit'
//                             // onClick={()=>handleUpdate(item._id)}
//                              className='bg-blue-400 px-3 py-1 rounded-md font-semibold'>Done</button>
//                         </form>}

//                         <div className='flex gap-10 py-2'>
//                           <button onClick={()=>{setUpdateIt(item._id)}} className='bg-blue-400 px-3 py-1 rounded-md font-semibold'>Update</button>
//                           <button onClick={()=>handleDelete(item._id)} className='bg-red-400 px-3 py-1 rounded-md  font-semibold'>Delete</button>
//                         </div>
//                     </div>
//                  </div>
//               ))}
              
//         </div>
       
//     </div>
//   )
// }

// export default Student