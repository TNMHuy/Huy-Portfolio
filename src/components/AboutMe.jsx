import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'
import gsap from 'gsap'



const AboutMe = () => {
    const mouse = useContext(MouseContext)
    const card = useRef(null)
    const containerRef = useRef(null)
    useEffect(()=>{
      
      gsap.to(card.current, {
        top: '-100px',
        ease: "none",
        // marker:true,
        scrollTrigger: {
          trigger:card.current,
          start: "-20% 50%",
          end: "bottom top",
          scrub: true,
          // markers: true
        }
      });
    },[])

  return (
    <div ref={card} id='about' className=' h-[100vh] mx-40  text-[#B7AB98]  leading-[66px] z-10 mix-blend-difference bg-black'>
        <div className='my-auto'>
            <div className='uppercase 2xl:text-[16px]  font-bold leading-[28px] tracking-[0.5rem] p-10'>
              about me
            </div>
            <p className='2xl:text-[5rem] xl:text-[4rem] lg:text-[3rem] md:text-[2rem] sm:text-[1rem]  p-10 font-extrabold' 
               onMouseEnter={()=>mouse.setSize(400)} 
               onMouseLeave={()=>mouse.setSize(40)}
            >
              I'm a <span className='text-[#ec4e39]'>selective skilled</span > product designer with strong focus on producing high quality & impactfull digital experience
            </p>
        </div>
        </div>
  )
}

export default AboutMe