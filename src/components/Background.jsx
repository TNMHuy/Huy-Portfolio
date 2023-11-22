import gsap from 'gsap';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Background = ({img}) => {
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
          marker: true
        }
      });
    },[])
  
      
        
    
  
     
  return (
    <div>
        <figure>
            <img ref={card} src={img} alt="" className='absolute w-screen h-screen -z-10'/>
        </figure>
    </div>
  )
}

export default Background