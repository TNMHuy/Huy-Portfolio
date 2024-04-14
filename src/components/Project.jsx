import React from 'react'
import Earth from './Earth'
import List from './List'

const Project = () => {
  return (
    <>
    <div className=''>
        <div className='uppercase mx-[160px] text-[#B7AB98] text-[16px] font-bold leading-[28px] tracking-[0.5rem] '>
            my projects
            </div>
        <section className='h-[60vw] relative flex justify-center items-center bg-transparent' id='project'>
            <Earth/>
            <List/>
        </section>
    </div>
    </>
  )
}

export default Project