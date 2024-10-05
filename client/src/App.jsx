import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Courses from './pages/Courses'



function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
         <Routes>
            <Route exact={true} path='/' element={<Home />} />
            <Route  path='/register' element={<Register />} />
            <Route  path='/courses' element={<Courses />} />

         </Routes>
         
    </BrowserRouter>
    </>
  )
}

export default App