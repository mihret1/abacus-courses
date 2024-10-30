import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import logo from '../asset/logoo.jpg'

function Auth() {
  const [isRegister,setIsregister]=useState(true)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorr,setError]=useState(false)
  const [userField,setUserField]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  const [paswordControl, setPasswordControl]=useState(false)
  const navigate=useNavigate()

  useEffect(()=>{
    const token=localStorage.getItem('token')
    // const decode=jwtDecode(token)
     if(token){
      const decode=jwtDecode(token)
      if(decode){  
            navigate('/')
      }
     }
  },[navigate])

  const signUp=async(e)=>{
    e.preventDefault()
    setUserField(false)
    setError(false)
    setErrorMessage('')
    setPasswordControl(false)
    try{
      
      if(!name || !email || !password){
        setUserField(true)
        return
      }

      if(password?.length<6){
        setPasswordControl(true)
        return
      }
      const { data } = await axios.post('http://localhost:1000/user/signup',{fullname:name,email,password})
      localStorage.setItem('token',data.token)
      console.log(data)
      setName('')
      setEmail('')
      setPassword('')
      setErrorMessage('')
      setError(false)
      navigate('/', { replace: true })
    }catch(error){
      
      console.log(error)
      setError(true)
      setErrorMessage(error.response.data)
    }

  }
  
  const signIn=async(e)=>{
    e.preventDefault()
    setUserField(false)
    setError(false)
    setErrorMessage('')
    setPasswordControl(false)

    try{
      
      if(!email || !password){
        setUserField(true)
        return
      }
      if(password.length<6){
        setPasswordControl(true)
        return
      }
      
      const {data }=await axios.post('http://localhost:1000/user/login',{email,password},)
      localStorage.setItem('token',data.token)
      
      console.log(data)
      setEmail('')
      setPassword('')
      setErrorMessage('')
      setError(false)
      navigate('/', { replace: true })

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
        <form  onSubmit={isRegister ? signIn : signUp} className="px-5 flex flex-col h-[390px] bg-white  w-[440px] gap-2 justify-center items-center shadow-lg">
            <p className="text-xl text-[#363950] pb-3 font-bold">{isRegister ? 'Login' :'Register'} to Dashborad</p>
            { !isRegister &&  <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="name" />
            }     
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400" placeholder="email"  />
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="password"/>
            <button type="submit" className="w-full h-10 bg-cyan-600 text-white text-xl  hover:bg-cyan-900" >{isRegister ? 'Login' :'Register'}</button>
            
           {userField && <p className="text-red-500">Enter all field</p>}
           {/* {errorr &&<p>Failed, {isRegister ? 'check your informtion again':'unable to register, check ur info again'}</p>} */}
        
           {errorr && <p className="text-red-500">{errorMessage}</p>}
           {(errorr && !errorMessage ) && <p className="text-red-500"> Failed, try again</p>}
           {paswordControl && <p className="text-red-500">Password atleast should be 6 digit</p>}
           <p className=" py-2 pt-3  text-[#11174b] font-semibold text-lg ">{isRegister? 'you have no account?' :'have already account?'} <button type="button" onClick={()=>setIsregister((e)=>!e)} className="text-cyan-600">{isRegister ? 'Register' :'Login'}</button></p>
            { isRegister && <div className="w-full flex justify-between pt-4"> <span></span> <a href='/forgetpassword' className="flex text-right text-cyan-600 text-lg">Forget Password ? </a>  </div>    }        </form>
    </div>
  )
}

export default Auth