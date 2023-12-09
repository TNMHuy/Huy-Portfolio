import React, { useState } from 'react'
import Titles from './Titles'
import Description from './Description'

const WhatIdo = () => {
  const data = [
    {
        title: "HTML",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "CSS",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "REACTJS",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    
    {
        title: "responsive",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8
    },
    
]
  const [selectedProject,setSelectedProject] = useState(null)
  return (
    <div id='work'>
        <div className='uppercase text-[16px] mx-[200px] text-[#B7AB98]  font-bold leading-[28px] tracking-[0.5rem] pb-10'>
          what i do
          </div>
        <section className='h-[30vw] relative flex flex-col justify-center items-center bg-transparent' id='project'>
      <Titles data ={data} setSelectedProject={setSelectedProject}/>
      <Description data ={data} selectedProject={selectedProject}/>
    </section>
    </div>
    
  )
}

export default WhatIdo