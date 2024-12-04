import React from 'react'
import {Hero, Navbar, BrowseTheRange, OurProducts, Carousel,  Footer, Gallery} from './components'

const App = () => {
  return (
    
    <div className='font-poppins'>
      <Navbar/>
      <Hero/>
      <BrowseTheRange/>
      <OurProducts/>
      <Carousel/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App