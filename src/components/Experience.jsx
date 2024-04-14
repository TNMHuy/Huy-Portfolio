import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'



const Experience = () => {
    const mouse = useContext(MouseContext)

  return (
    <div className=' h-[100vh] mt-2 2xl:mt-80 xl:m-48 lg:m-40 md:m-32 sm:m-24 text-[#B7AB98] 2xl:text-[5rem] xl:text-[4rem] lg:text-[3rem]
                     md:text-[2rem] sm:text-[1rem] leading-[66px] z-10 mix-blend-difference bg-black'>
        <div className='uppercase text-[16px] font-bold leading-[28px] mx-20 md:mx-0 tracking-[0.5rem] mb-20 '>
        my skills
        </div>
        <p className='  font-extrabold' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                   Over <span className='text-[#ec4e39]'>a year</span > of learning front-end include: <span className='text-[#ec4e39]'>HTML</span >,
                    <span className='text-[#ec4e39]'> CSS</span >,
                    <span className='text-[#ec4e39]'> Javascript</span >,
                    <span className='text-[#ec4e39]'> Reactjs</span >,
                    <span className='text-[#ec4e39]'> Redux</span >,
                    <span className='text-[#ec4e39]'> Tailwind css</span >,
                    <span className='text-[#ec4e39]'> Bootstrap </span >,
                    <span className='text-[#ec4e39]'> Material-UI </span >,
                    <span className='text-[#ec4e39]'> Threejs </span >
          </p>
      </div>
  )
}

export default Experience