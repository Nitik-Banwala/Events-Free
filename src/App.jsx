import { useState } from 'react'
import './index.css'
import Navbar from './Commancomponents/Navbar'
import Comfooter from './Commancomponents/Comfooter'
import Section1 from './page1/Section1'
import Section2 from './page1/Section2'
import Section3 from './page1/Section3'
import Section4 from './page1/Section4'
import Section5 from './page1/Section5'

function App() {


  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Comfooter />
    </>
  )
}

export default App
