import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import useMousePosition from '../utills/useMousePosition'
import MouseContext from '../utills/mouseContext'

const Cursor = () => {
    const {x,y} = useMousePosition()
    const mouse = useContext(MouseContext)
    const cursor = useRef(null)
    useEffect(()=>{
        gsap.to(cursor.current,{
            left:x-(mouse.size/2),
            top:y-(mouse.size/2),
            width:mouse.size,
            height:mouse.size,
            duration:0.5,
            ease:'backOut'
        })
    },[x,y])
  return (
    <div ref={cursor} className='fixed bg-[#eB5939] rounded-full top-0 left-0 w-10 h-10 -z-10'>

    </div>
  )
}

export default Cursor