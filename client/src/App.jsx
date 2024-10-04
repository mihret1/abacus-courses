import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'



function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
         <Routes>
            <Route exact={true} path='/' element={<Home />} />
         </Routes>

    </BrowserRouter>
  )
}

export default App