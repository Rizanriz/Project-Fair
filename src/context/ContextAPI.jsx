import React, { createContext, useState } from 'react'

export const addResponceContext = createContext("")

const ContextAPI = ({children}) => {

    const [addResponce,setAddresponce] = useState("")

  return (
    <>
        <addResponceContext.Provider value={[addResponce,setAddresponce]}>
                {children}
        </addResponceContext.Provider>
    </>
  )
}

export default ContextAPI