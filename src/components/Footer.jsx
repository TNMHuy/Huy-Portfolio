import React from 'react'
import SocialNav from './SocialNav'
import SoundButton from './SoundButton'
import Magnetic from './common/Magnetic'
import Insta from '../assets/react.svg'

const Footer = () => {
  return (
    <div className='w-full fixed bottom-0 left-0'>
        <div className='flex justify-between items-center mx-16 my-10'>
       <SocialNav/>
       <SoundButton/>
        </div>     
    </div>
  )
}

export default Footer