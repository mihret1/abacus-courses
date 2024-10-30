import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import logo from '../asset/logoo.jpg'
import { useParams } from 'react-router-dom'


function ResetPassword() {
  const [confirmPassword,setConfirmPassword]=useState('')
  const [password,setPassword]=useState('')
  
  const [userField,setUserField]=useState(false)
  const [paswordLengthControl, setPasswordLengthControl]=useState(false)
  const [passwordMatchedControl,setPasswordMatchedControl]=useState(false)
  const [errorr,setError]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const [success,setSuccess]=useState(false)



  const navigate=useNavigate()
  const{token}=useParams()

   const handlePasswordReset=async(e)=>{
     e.preventDefault()

     setUserField(false)
     setPasswordLengthControl(false)
     setPasswordMatchedControl(false)
     setError(false)
     setErrorMessage('')
     setSuccess(false)
    

     if(!password || !confirmPassword){
      setUserField(true)
      return
     }
     if(password?.length<6 || confirmPassword?.length<6) {
      setPasswordLengthControl(true)
      return
     }


     if(password !== confirmPassword){
      setPasswordMatchedControl(true)
      return
     }
     
     try{
     
      const {data}=await axios.post(`http://localhost:1000/user/reset-password/${token}/`,{password})
      console.log(data)
      setSuccess(true)

    }catch(error){
          console.log(error)
          setError(true) 
          setErrorMessage(error.response.data) 
        }

   }

 
  return (
    <div className=" pb-28 flex flex-col gap-3 justify-center items-center pt-5 bg-gray-100">
         <img src={logo} className="w-24 h-24 rounded-full "/>
         <p className="text-2xl font-bold  text-[#363950] pb-5 ">Eagle Training Center</p>
        <form onSubmit={handlePasswordReset}  className="px-5 flex flex-col h-[390px] bg-white  w-[440px] gap-2 justify-center items-center shadow-lg">
            <p className="text-xl text-[#363950] pb-3 font-bold">Reset  your Password</p>
             
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="password"/>
            <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="confirm password"/>
            <button type="submit" className="w-full h-10 bg-cyan-600 text-white text-xl  hover:bg-cyan-900" >Enter</button>
            
           {userField && <p className="text-red-500">Enter all field</p>}        
           {paswordLengthControl && <p className="text-red-500">Password atleast should be 6 digit</p>}
           {passwordMatchedControl && <p className="text-red-500">Password and confrim password is not the same</p>}
           {(errorr && !errorMessage) && <p className="text-red-500">failed, try again</p>}
           {(errorr && errorMessage) && <p className="text-red-500">{errorMessage}</p>}
           {success && <p className="text-green-500">password updated</p>}

            </form>
    </div>
  )
}

export default ResetPassword