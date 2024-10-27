import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../asset/co3.jpg'
import CommenPart from '../components/CommenPart'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';






function Student () {
  const [students,setStudents]=useState([])
  const [statuss,setStatus]=useState('')
  const [updateIt,setUpdateIt]=useState('')


  const [pg, setpg] = useState(0); 
  const [rpg, setrpg] = useState(7); 

  function handleChangePage(event, newpage) { 
        setpg(newpage); 
    } 

  function handleChangeRowsPerPage(event) { 
        setrpg(parseInt(event.target.value, 10)); 
        setpg(0); 
    } 


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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(!isOpen);
  }

  return (
   <CommenPart>


      <TableContainer className='pt-12 '>
        
           <Table>
             <TableHead>
                <TableRow>
                 <TableCell  sx={{ fontSize:'17px' }}> Total={students.length}</TableCell>
                  <TableCell  sx={{ fontSize:'17px' }}>Name</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Phone</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Account Type</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Status</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Reciept</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Delete</TableCell>
                  <TableCell sx={{ fontSize:'17px' }}>Edit</TableCell>

                </TableRow>
             </TableHead>
             <TableBody>
                {students?.slice(pg * rpg, pg * rpg + rpg).map((item,index)=>(
                   <TableRow key={item.key} className='hover:bg-gray-200'>
                      <TableCell>{index+1}</TableCell>
                      <TableCell>{item.fullname}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.account}</TableCell>
                      <TableCell>{item.statu}</TableCell>
                      <TableCell>
                       <button onClick={()=>togglePopup(item.reciept)}> <img src={item.reciept} className='w-8 h-7 rounded-md'/></button> 
                        {isOpen&& selectedImage &&  (
                            <div className="fixed top-0 left-0 w-full overflow-scroll  h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg px-[5%] mx-20 overflow-y-scroll">
                                <img src={selectedImage} />
                                <button
                                onClick={()=>togglePopup(item.reciept)}
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                                >
                                Close
                                </button>
                            </div>
                            </div>
                   )}
                   </TableCell>
                      <TableCell>
                        <button onClick={()=>handleDelete(item._id)} className='bg-red-400 px-3 py-1 rounded-md  font-bold text-white'>Delete</button>
                      </TableCell>
                      <TableCell>
                        <button onClick={()=>{setUpdateIt(item._id)}} className='bg-blue-400 px-3 py-1 rounded-md font-bold text-white'>Update</button>
                        {(updateIt ===item._id )&& <form onSubmit={(e)=>handleUpdate(item._id,e)} className=' flex py-2 gap-2'>
                       <span className=''>Update Progress:</span> 
                       <select value={statuss} onChange={(e)=>setStatus(e.target.value)} className='border-2 px-2 py-1 '> 
                         <option value=''>Select Status</option>
                         <option value='inprogress'>inprogress</option>
                         <option value='completed'>completed</option>
                       </select>
                       <button 
                       type='submit'
                       // onClick={()=>handleUpdate(item._id)}
                        className='bg-blue-400 px-3 py-1 rounded-md font-semibold'>Done</button>
                       </form>}
                      </TableCell>

                   </TableRow>
                ))}
             </TableBody>
           </Table>
      </TableContainer>
      <TablePagination
       rowsPerPageOptions={[5, 8, 25,50,100]}
       count={students.length}
       rowsPerPage={rpg} 
       page={pg} 
       onPageChange={handleChangePage} 
       onRowsPerPageChange={handleChangeRowsPerPage} 
        >

      </TablePagination>
      
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