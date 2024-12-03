import React from 'react'
import {Hero, Navbar, BrowseTheRange, OurProducts} from './components'

const App = () => {
  return (
    
    <div className='font-poppins'>
      <Navbar/>
      <Hero/>
      <BrowseTheRange/>
      <OurProducts/>
    </div>
  )
}

export default App