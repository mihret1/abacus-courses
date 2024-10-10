import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Courses from './pages/Courses'
import WebDevelopment from './pages/CoursesDetail/WebDevelopment'
import Graphics from './pages/CoursesDetail/GraphicsDesign'
import MobileDevelopment from './pages/CoursesDetail/MobileDevelopment'
import Marketing from './pages/CoursesDetail/DigitalMarketing'
import Auth from './pages/Auth'



function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
         <Routes>
            <Route exact={true} path='/' element={<Home />} />
            {/* <Route  path='/register' element={<Register />} />
            <Route  path='/courses' element={<Courses />} />
            <Route  path='/web' element={<WebDevelopment />} />
            <Route  path='/graphics' element={<Graphics />} />
            <Route  path='/mobile' element={<MobileDevelopment />} />
            <Route  path='/marketing' element={<Marketing />} /> */}

            <Route  path='/auth' element={<Auth />} />



         </Routes>
         
    </BrowserRouter>
    </>
  )
}

export default App