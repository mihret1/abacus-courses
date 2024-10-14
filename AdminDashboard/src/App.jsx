import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'


export default function App() {
  return (
    <BrowserRouter>

       <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route path='/auth' element={<Auth/>} />
       </Routes>
    
    
    </BrowserRouter>
    
  )
}