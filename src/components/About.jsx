import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'
import bg from '../assets/bg4.avif'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const mouse = useContext(MouseContext)
    const card = useRef(null)

    useEffect(()=>{
      
      gsap.to(card.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: card.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          marker: false
        }
      });
    },[])
    
  return (
    <div className='h-[100vh] relative ' id='about'  >
        <div className='w-full overflow-hidden h-screen flex flex-col text-center justify-center items-center text-[#b7ab98] font-bold leading-[66px] z-10 mix-blend-difference'>
            <img src={bg} ref={card} className='absolute w-auto h-[150vh] -z-10' alt="" />
            <p className='w-[1000px] text-[2rem] tracking-[0.5rem] p-10 uppercase' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                 minh huy
            </p>
            <p className='w-[100px]  text-[10rem] gap-16  p-10 uppercase flex flex-col text-center justify-center items-center' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                   making 
                   <span className='text-[#ec4e39]'>good</span >
                   <span className='text-[#ec4e39]'> shit</span >
                    since
                    <span>2022</span>
            </p>
        </div>
        {/* <div className='w-full h-full flex justify-center items-center text-[#afa18f] text-[4rem] leading-[66px] z-10 mix-blend-difference'>
            <p className='w-[1000px] p-10' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                    i'm a <span className='text-[#ec4e39]'>selective skilled</span > product designer with strong focus on producing high quality & impactfull digital experience
            </p>
        </div> */}
    </div>
  )
}

export default About