import React from 'react'
import {Hero, Navbar, BrowseTheRange, OurProducts, Footer} from './components'

const App = () => {
  return (
    
    <div className='font-poppins'>
      <Navbar/>
      <Hero/>
      <BrowseTheRange/>
      <OurProducts/>
      <Footer/>
    </div>
  )
}

export default App