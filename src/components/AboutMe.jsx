import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'



const AboutMe = () => {
    const mouse = useContext(MouseContext)

  return (
    <div id='about' className='w-full h-full p-40 text-[#B7AB98] text-[5rem] leading-[66px] z-10 mix-blend-difference bg-black'>
        <div className='uppercase text-[16px] font-bold leading-[28px] tracking-[0.5rem] p-10'>
          about me
          </div>
            <p className='w-[1500px] h-[]  p-10 font-extrabold' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                    I'm a <span className='text-[#ec4e39]'>selective skilled</span > product designer with strong focus on producing high quality & impactfull digital experience
            </p>
        </div>
  )
}

export default AboutMe