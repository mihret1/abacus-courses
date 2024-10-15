import axios from 'axios'
import React from 'react'

function Home () {

  const {data}= axios.get('')
  
  return (
    <div>
        home sweet home
        
    </div>
  )
}

export default Home