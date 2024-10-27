import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img1 from '../asset/co3.jpg'
import CommenPart from '../components/CommenPart'
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import Paper from '@mui/material/Paper';






// const InterestedPart=({students,setStudents})=>{
//   // const [students,setStudents]=useState([])
//     useEffect(()=>{
//     const getResult=async()=>{
//     const  { data} = await axios.get('http://localhost:1000/interested')
//     setStudents(data)
//     }
//     getResult()

//     },[students])

//   const handleDelete=async(_id)=>{
//     try{
//       const {data}=await axios.delete(`http://localhost:1000/interested/${_id}`)
//       console.log(data)
//     }catch(error){
//       console.log(error)
//     }

//   }
//   return(
//     <div>
//       <div className='flex justify-between text-3xl text-white h-20 bg-cyan-600  items-center px-4'>
//         <span> All Interested  Students</span>
//         <a href='/student' className='text-xl hover:text-yellow-400 bg-gray-600 px-3 py-1 rounded-md'>Registerd students</a>
//     </div>
//         <div className='flex flex-col p-4 gap-3' >
              
//               {students.map((item,index)=>(
//                  <div key={item.key} className='flex gap-3 border-2 rounded-lg p-3   '>
//                     <div className='text-xl font-semibold'>{index+1}.</div>
//                     <div className='flex flex-col gap-1  '>
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Name:</span><span className='text-xl'>{item.fullname}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Phone number:</span><span className='text-xl'>{item.phoneNumber}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Email:</span><span className='text-xl'>{item.email}</span></div> 
//                         <button onClick={()=>handleDelete(item._id)} className='px-3 text-white w-28 py-1 bg-red-500'>Delete</button>
//                     </div>
//                  </div>
//               ))}
              
//         </div>
        
//     </div>
    
//   )
// }



function Interested () {
  const [students,setStudents]=useState([])
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
   <CommenPart>

    

      <TableContainer  className='pt-12 '>
          <Table>
            <TableHead>
                <TableRow >
                   <TableCell sx={{ fontSize:'17px' }}>
                       Total={students.length}
                    </TableCell>
                    <TableCell sx={{ fontSize:'17px' }}>
                       FullName
                    </TableCell>
                    <TableCell sx={{ fontSize:'17px' }}>
                       Email
                    </TableCell>
                    <TableCell sx={{ fontSize:'17px'}}>
                       Phone Number
                    </TableCell>
                    <TableCell sx={{ fontSize:'17px' }}>
                       Manage
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               { students?.slice(pg * rpg, pg * rpg + rpg).map((item,index)=>(
                <TableRow key={item.key}  className='hover:bg-gray-200'>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.phoneNumber}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell><button onClick={()=>handleDelete(item._id)} className='px-3 text-white w-28 py-1 bg-red-500'>Delete</button></TableCell> 

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

export default Interested





























// function Interested () {
//   const [students,setStudents]=useState([])
//   useEffect(()=>{
//     const getResult=async()=>{
//     const  { data} = await axios.get('http://localhost:1000/interested')
//     setStudents(data)
//     }
//     getResult()

//   },[students])

//   const handleDelete=async(_id)=>{
//     try{
//       const {data}=await axios.delete(`http://localhost:1000/interested/${_id}`)
//       console.log(data)
//     }catch(error){
//       console.log(error)
//     }

//   }


//   return (
//     <div>
//       <div className='flex justify-between text-3xl text-white h-20 bg-cyan-600  items-center px-4'>
//         <span> All Interested  Students</span>
//         <a href='/student' className='text-xl hover:text-yellow-400 bg-gray-600 px-3 py-1 rounded-md'>Registerd students</a>
//     </div>
//         <div className='flex flex-col p-4 gap-3' >
              
//               {students.map((item,index)=>(
//                  <div key={item.key} className='flex gap-3 border-2 rounded-lg p-3   '>
//                     <div className='text-xl font-semibold'>{index+1}.</div>
//                     <div className='flex flex-col gap-1  '>
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Name:</span><span className='text-xl'>{item.fullname}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Phone number:</span><span className='text-xl'>{item.phoneNumber}</span></div> 
//                         <div className='flex gap-3 items-center'>  <span className='text-xl font-serif'>Email:</span><span className='text-xl'>{item.email}</span></div> 
//                         <button onClick={()=>handleDelete(item._id)} className='px-3 text-white w-28 py-1 bg-red-500'>Delete</button>
//                     </div>
//                  </div>
//               ))}
              
//         </div>
        
//     </div>
//   )
// }

// export default Interested