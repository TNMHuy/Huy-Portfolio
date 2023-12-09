import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'



const Experience = () => {
    const mouse = useContext(MouseContext)

  return (
    <div className='w-full h-full p-40 text-[#B7AB98] text-[5rem] leading-[66px] z-10 mix-blend-difference bg-black'>
        <div className='uppercase text-[16px] font-bold leading-[28px] tracking-[0.5rem] p-10'>
        experience
          </div>
            <p className='w-[1500px] h-[]  p-10 font-extrabold' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                   Over <span className='text-[#ec4e39]'>a year</span > of learning front-end include: <span className='text-[#ec4e39]'>HTML</span >,
                    <span className='text-[#ec4e39]'>CSS</span >,
                    <span className='text-[#ec4e39]'>Javascript</span >,
                    <span className='text-[#ec4e39]'>Reactjs</span >,
                    <span className='text-[#ec4e39]'>Redux</span >,
            </p>
        </div>
  )
}

export default Experience