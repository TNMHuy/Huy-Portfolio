import React, { useContext, useEffect, useRef } from 'react'
import MouseContext from './utills/mouseContext'
import bg from '../assets/bg4.avif'
import bg2 from '../assets/images2.avif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const mouse = useContext(MouseContext)
    const card = useRef(null)

    useEffect(()=>{
      
      gsap.to(card.current, {
        yPercent: -20,
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
    <div  className='h-[1300px]  relative overflow-hidden'>
        <div  id='heroBg' className='absolute h-full w-full' >
            <img src={bg2} ref={card}  className='w-full h-full -z-10 top-0 left-0' alt="background" />
        </div>
          <div id='heroContent' 
            className='flex flex-col text-center justify-center items-center text-[#b7ab98] font-bold leading-[66px] z-10 mix-blend-difference'>
            <p 
              className='w-[1000px] text-[2rem] 2xl:text-[1.8rem] xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] 
                         tracking-[0.5rem] p-10 uppercase' 
              onMouseEnter={()=>mouse.setSize(400)} 
              onMouseLeave={()=>mouse.setSize(40)}
              >
                  minh huy
            </p>
            <p 
              className='w-[100px]  text-[10rem] 2xl:text-[9rem] xl:text-[8rem]
                         lg:text-[7rem] md:text-[6rem] sm:text-[5rem] gap-16  p-10 uppercase flex flex-col text-center justify-center items-center' 
              onMouseEnter={()=>mouse.setSize(400)} 
              onMouseLeave={()=>mouse.setSize(40)}>
                    making 
                    <span className='text-[#ec4e39]'>good</span >
                    <span className='text-[#ec4e39]'> shit</span >
                      since
                    <span>2023</span>
            </p>
            </div>
    </div>
  )
}

export default Hero