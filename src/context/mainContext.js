import React from 'react'
import { AuthContext } from './authContext'

export const MainContext = ({ children }) => {
    return (
        <>
            <AuthContext>
                {children}
            </AuthContext>
        </>
    )
}

