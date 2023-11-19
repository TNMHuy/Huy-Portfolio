import React, { useState } from 'react'

const Logo = () => {
const [hover,setHover] = useState(false)

  return (
    <div onMouseEnter={()=>setHover(true)} 
         onMouseLeave={()=>setHover(false)}>
       <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 cursor-pointer" viewbox_="0 0 NaN NaN">
  <path fillRule="evenodd" clipRule="evenodd" d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z" fill={hover?"#ec4e39":"#B7AB98"} />
  <ellipse cx="26.1333" cy="37.4132" rx="2.13333" ry="2.14172" fill={hover?"#ec4e39":"#B7AB98"} />
  <ellipse cx="37.1333" cy="37.4132" rx="2.13333" ry="2.14172" fill={hover?"#ec4e39":"#B7AB98"} />
</svg>

    </div>
  )
}

export default Logo