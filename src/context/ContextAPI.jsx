import React, { createContext, useState } from 'react'

export const addResponceContext = createContext("")
export const editResponseContext = createContext("")

const ContextAPI = ({ children }) => {

    const [addResponce, setAddresponce] = useState("")
    const [editResponse, setEditResponse] = useState("")

    return (
        <>
            <addResponceContext.Provider value={[addResponce, setAddresponce]}>
                <editResponseContext.Provider value={[editResponse, setEditResponse]}>
                    {children}
                </editResponseContext.Provider>
            </addResponceContext.Provider>
        </>
    )
}

export default ContextAPI