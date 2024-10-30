import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Student from './pages/students'
import Auth from './pages/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import Interested from './pages/interested';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/resetPassword';



const AppWrapper=({children})=>{
    const navigate=useNavigate()
    const token=localStorage.getItem('token')

  useEffect(()=>{

     if(token){
      try{
        const decode=jwtDecode(token)
        const currentTime=Date.now()/1000

       if(currentTime > decode.exp){
        localStorage.removeItem('token')
        navigate('/auth',{replace:true})
       }
      }catch(error){
        localStorage.removeItem('token');
        navigate('/auth', { replace: true });
        console.log(error)
      }
     }else if(!token){
      // navigate('/auth',{replace:true})

     }

  },[navigate,token])
  return(<>{children}</>)
  
}


export default function App() {
  // const navigate=useNavigate()

  // useEffect(()=>{
  //   const token=localStorage.getItem('token')

  //    if(token){
  //     try{
  //       const decode=jwtDecode(token)
  //       const currentTime=Date.now()/1000

  //      if(currentTime > decode.exp){
  //       localStorage.removeItem('token')
  //       navigate('/auth',{replace:true})
  //      }
  //     }catch(error){
  //       localStorage.removeItem('token');
  //       navigate('/auth', { replace: true });
  //       console.log(error)
  //     }
  //    }

  // },[navigate])


  
  return (
      
    <BrowserRouter>
    <AppWrapper>

       <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/interested' element={<Interested />} />
          <Route path='/student' element={<Student />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/reset/:token' element={<ResetPassword />} />





       </Routes>
      
       </AppWrapper>
    
    </BrowserRouter>
  )
}