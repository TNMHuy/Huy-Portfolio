import React, { createContext, useContext, useState } from 'react'

const MouseContext = createContext();
export const MouseProvider =({children}) =>{
    const [size,setSize] = useState(40);
    return (
        <MouseContext.Provider value={{size,setSize}}>
            {children}
        </MouseContext.Provider>
    )
}

export default MouseContext