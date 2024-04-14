import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Cursor from './components/common/Cursor'
import Project from './components/Project'
import Contact from './components/Contact'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import WhatIdo from './components/WhatIdo'
import Experience from './components/Experience'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)
  
  return (
   <>
   <Header/>
   <Hero/>
   <AboutMe/>
   <WhatIdo/>
   <Experience/>
   <Project/>
   <Contact/>
   <Footer/>
   <Cursor/>
   </>
  )
}

export default App
