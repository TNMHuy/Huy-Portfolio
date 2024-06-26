import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Magnetic from './common/Magnetic'

const Header = () => {
  return (
    <div className='w-full fixed top-0 left-0 z-10 mix-blend-difference ' >
        <div className='flex justify-between items-center  mx-16 my-10'>
          <Magnetic>
            <Logo/>
          </Magnetic>
        <Nav/>
        </div>
        
    </div>
  )
}

export default Header