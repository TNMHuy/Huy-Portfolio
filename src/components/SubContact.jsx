
import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import React, { useContext, useRef } from 'react'
import MouseContext from './utills/mouseContext';
import {motion} from 'framer-motion'
import triangle from "../assets/triangle.svg"


export default function SubContact({data,setSelectedContact,selectedContact}){
    return(
        <div className='w-full'>
            {
                data.map((project,index)=>{
                    return <Title key={index} data ={{...project,index}} setSelectedContact={setSelectedContact} selectedContact={selectedContact}/>
                })
            }
        </div>
    )
}

function Title ({data,setSelectedContact,selectedContact}){
    const {title,index,description} = data;
    const container = useRef(null);
    const mouse = useContext(MouseContext)
    return(
        <div ref={container} className='relative z-[4] flex text-[44px] font-bold gap-4'
       >
            <div className=' flex px-[10%] gap-4 ' 
            
                 key={index}        
               >
              <img src={triangle} alt="" className='' />

            <div className=''
                 onMouseLeave={()=>{
                    setSelectedContact(null)
                }}
                onMouseEnter={()=>{
                    setSelectedContact(index)
                    mouse.setSize(40)     
                }}
            >
                <div  className='absolute w-[400px] text-[#000] flex bg-[#ec4e39] font-bold  m-0  z-[2]'
                 style={{clipPath:selectedContact == index ?"inset(0% 0 0%)":"inset(50% 0 50%)", transition:'clip-path .4s'}}

          >
                {description}
            </div>
            <div  className=' text-[#b7ab98]   font-bold  m-0 relative z-[-10]'
                 style={{clipPath:selectedContact == index ?"inset(-50% 0 -50%)":"inset(0 0 0)", transition:'clip-path .4s'}}

            >
                {title}
            </div>
            </div>

            </div>
            

        </div>
    )
}