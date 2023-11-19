import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const TextSlide = ({text,currentSection,href}) => {
   const topText = useRef(null)
   const bottomText = useRef(null)
   useEffect(()=>{
      if(text===currentSection){
        gsap.set(topText.current,{
          top:'-100%',
          duration:0.1,
        })
        gsap.set(bottomText.current,{
          top:'0',
          duration:0.1,
        })
      }
      else{
        gsap.set(topText.current,{
          top:'0',
          duration:0.1,
        })
        gsap.set(bottomText.current,{
          top:'100%',
          duration:0.1,
        })
      }
   },[currentSection])
   const handleMouseMove =()=>{
    if(text!==currentSection){
      gsap.to(topText.current,{
        top:'-100%',
        duration:0.1,
      })
      gsap.to(bottomText.current,{
        top:'0',
        duration:0.1,
      })
    }
   }
   const handleMouseLeave =()=>{
    if(text!==currentSection){
      gsap.to(topText.current,{
        top:'0',
        duration:0.1,
      })
      gsap.to(bottomText.current,{
        top:'100%',
        duration:0.1,
      })
    }
   }
  return (
    <div 
        onMouseMove={ handleMouseMove}
        onMouseLeave={ handleMouseLeave}
        className='relative h-4 overflow-hidden w-[74px]'>
          
       <a href={href} className='scroll-smooth' >
       <span 
              ref={topText}
              className='absolute right-0 top-0 transition-all duration-500 text-[#B8AC9980]'
        >{text}</span>
        <span 
              ref={bottomText}
              className='absolute right-0 top-full transition-all duration-500 text-[#B7AB98]'
        >{text}</span>
       </a>
    </div>
  )
}

export default TextSlide