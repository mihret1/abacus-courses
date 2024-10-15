import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";



const AppWrapper=({children})=>{
    const navigate=useNavigate()

  useEffect(()=>{
    const token=localStorage.getItem('token')

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
      navigate('/auth',{replace:true})

     }

  },[navigate])
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
       </Routes>
      
       </AppWrapper>
    
    </BrowserRouter>
  )
}