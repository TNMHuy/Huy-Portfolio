import React, { useState } from 'react'
import TextSlide from './common/TextSlide'
const routes = [
  {
    page: 'about',
    href:'#about'
  },
  {
    page: 'work',
    href:'#project'
  },
  {
    page: 'contact',
    href:'#contact'
  },

]
const Nav = () => {
 const [currentSection,setSection] = useState('about')
  return (
    <nav>
        <ul className='text-right uppercase font-bold text-[1rem] leading-4'>
            {
              routes.map((item,index)=>{
              
                return (
                  <li className='py-[0.375rem] text-[#B7AB98] cursor-pointer ' onClick={()=>setSection(item.page)} >
                    <TextSlide text={item.page} href={item.href} currentSection={currentSection} />
                  </li>
                )
              })
            }
        </ul>
    </nav>
  )
}

export default Nav