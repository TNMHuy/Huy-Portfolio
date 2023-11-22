import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Cursor from './components/common/Cursor'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  
  return (
   <>
   <Header/>
   <About/>
   <Project/>
   <Contact/>
   <Footer/>
   <Cursor/>
   </>
  )
}

export default App
