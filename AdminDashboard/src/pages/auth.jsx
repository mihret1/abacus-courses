import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


function Auth() {
  const [isRegister,setIsregister]=useState(true)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errorr,setError]=useState(false)
  const [userField,setUserField]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
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
    try{
      
      if(!name || !email || !password){
        setUserField(true)
        return
      }
      const {data}=await axios.post('http://localhost:1000/user/signup',{fullname:name,email,password})
      localStorage.setItem('token',data.token)
      console.log(data)
      setName('')
      setEmail('')
      setPassword('')
      setErrorMessage('')
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

    try{
      
      if(!email || !password){
        setUserField(true)
        return
      }
      const {data }=await axios.post('http://localhost:1000/user/login',{email,password},)
      localStorage.setItem('token',data.token)
      
      console.log(data)
      setEmail('')
      setPassword('')
      setErrorMessage('')
      navigate('/', { replace: true })

    }catch(error){
      console.log(error)
      setError(true)
      setErrorMessage(error.response.data)

    }

  }
 
 
  return (
    <div className="  flex  justify-center items-center">
        <form onSubmit={isRegister ? signIn : signUp} className="flex flex-col h-[600px]  w-[400px] gap-2 justify-center items-center">
            <p className="text-xl text-gray-500">{isRegister ? 'Login' :'Register'} to dashborad</p>
            { !isRegister &&  <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="name" />
            }     
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400" placeholder="email"  />
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-full h-12 border-2 p-2 outline-1 outline-blue-400"  placeholder="password"/>
            <button type="submit" className="w-full h-10 bg-cyan-600 text-white hover:bg-cyan-900" >{isRegister ? 'Login' :'Register'}</button>
           {userField && <p className="text-red-500">Enter all field</p>}
           {/* {errorr &&<p>Failed, {isRegister ? 'check your informtion again':'unable to register, check ur info again'}</p>} */}
        
           {errorr && <p className="text-red-500">{errorMessage}</p>}
           <p className=" py-2 ">{isRegister? 'you have no account?' :'have already account?'} <button type="button" onClick={()=>setIsregister((e)=>!e)} className="text-blue-500">{isRegister ? 'Register' :'Login'}</button></p>

        </form>
    </div>
  )
}

export default Auth