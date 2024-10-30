


import axios from 'axios'
import logo from '../asset/logoo.jpg'
import { useEffect, useState } from "react"


function ForgetPassword() {
  const [email,setEmail]=useState('')
  const [userField,setUserField]=useState(false)
  const [errorr,setError]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const [success,setSuccess]=useState(false)
  
  const handleForgetPassword=async(e)=>{
    e.preventDefault()
    setUserField(false)
    setError(false)
    setErrorMessage('')
    setSuccess(false)

    if(!email){
      setUserField(true)
      return
    }
    try{
      const {data}= await axios.post('http://localhost:1000/user/require-reset',{email})
      console.log(data)
      setSuccess(true)
    }catch(error){
      setError(true)
      setErrorMessage(error.response.data)
      console.log(error)
    }


  }

  return (
    <div className=" pb-28 flex flex-col gap-3 justify-center items-center pt-5 bg-gray-100">
    <img src={logo} className="w-24 h-24 rounded-full "/>
    <p className="text-2xl font-bold  text-[#363950] pb-5 ">Eagle Training Center</p>
   <form onSubmit={handleForgetPassword} className="px-5 flex flex-col h-[390px] bg-white  w-[440px] gap-2 justify-center items-center shadow-xl">
       <p className="text-xl text-[#363950] pb-3 font-bold">Forgot your Password?</p>
       <p className="text-lg text-[#363950] pb-3 ">Enter your email</p>
    
       <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400" placeholder="email"  />
       <button type="submit" className="w-full h-10 bg-cyan-600 text-white text-xl  hover:bg-cyan-900" >Enter</button>
       
      {userField && <p className="text-red-500">Enter all field</p>}
      {( errorr && !errorMessage ) && <p className="text-red-500">sorry,failed try again!</p>}
      {(errorr && errorMessage )&& <p className="text-red-500">{errorMessage}</p> }
      {success && <p className="text-green-500">check your email to reset</p> }
    </form>
</div>
  )

}

export default ForgetPassword