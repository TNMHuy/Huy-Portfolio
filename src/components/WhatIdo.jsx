import React, { useState } from 'react'
import Titles from './Titles'
import Description from './Description'

const WhatIdo = () => {
  const data = [
    {
        title: "3D",
        description: "I can create animation by using threejs",
        speed: 0.5,
    },
    {
        title: "Motion",
        description: "I use motion that make my web more interesting than it actually is",
        speed: 0.5
    },
   
    
    {
        title: "Ecommerce ",
        description: " ",
        speed: 0.8
    },
    {
        title: "Blog website",
        description: " ",
        speed: 0.8
    },
    
]
  const [selectedProject,setSelectedProject] = useState(null)
  return (
    <div id='work' className='h-[100vh]  '>
        <div className='uppercase text-[16px] mx-[200px]  text-[#B7AB98]  font-bold leading-[28px] tracking-[0.5rem] mb-40'>
          what i do
          </div>
        <section className=' relative flex flex-col justify-center items-center bg-transparent ' id='project'>
          <Titles data ={data} setSelectedProject={setSelectedProject}/>
          <Description data ={data} selectedProject={selectedProject}/>
        </section>
    </div>
    
  )
}

export default WhatIdo