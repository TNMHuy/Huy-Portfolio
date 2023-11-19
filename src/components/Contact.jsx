import React, { useContext } from 'react'
import MouseContext from './utills/mouseContext'
import faker from "../assets/faker.webp"
import triangle from "../assets/triangle.svg"

const Contact = () => {
  
    const mouse = useContext(MouseContext)
  return (
    <div className=' my-40  ' id='contact' >
        <div className='w-full h-full flex flex-col text-center justify-center items-center text-[#b7ab98] font-bold  z-10 mix-blend-difference'>
            <p className='w-[1000px] text-[2rem] tracking-[0.5rem] p-10 uppercase' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                 my motto
            </p>
            <p className='w-[1000px] text-[8rem] flex p-10 uppercase ' onMouseEnter={()=>mouse.setSize(400)} onMouseLeave={()=>mouse.setSize(40)}>
                  "all roads lead to me"
            </p>

            <p>-Lee Sang Hyeok-</p>
            {/* <img src={faker} alt="" className='border border-black rounded-full w-[50px] h-[52px] '/> */}
        </div>
        <div className='  text-cent text-[#b7ab98] font-bold mx-80 mt-96'>
          <div className='uppercase text-[16px] leading-[28px] tracking-[0.5rem] mb-12'>
          connect
          </div>
          <div className='flex justify-between'>
          <ul className='flex flex-col '>
            <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Dribbble</li>
            <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Youtube</li>
            <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Dribbble</li>
            
          </ul>
          <ul>
          <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Instagram</li>
          <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Facebook</li>
          <li className='flex text-[44px] font-bold gap-4'>
              <img src={triangle} alt="" />
              Behance</li>
          </ul>
         <div className='flex flex-col justify-around'>
          <div>
            <p>Email</p>
            <p className='text-[#B8AC9980]'>mhuy2898@gmail.com</p>
          </div>
          <div>
            <p>Phone</p>
            <p className='text-[#B8AC9980]'>+84 905 914 397</p>
          </div>
         </div>
          </div>
        </div>
    </div>
  )

}

export default Contact