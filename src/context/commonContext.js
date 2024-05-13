import React, { createContext, useState } from 'react';
export const CommonContext = createContext();

export const CommonContextC = ({ children }) => {
    const [] = useState('');
    return (
        <CommonContext.Provider value={{}}>
            {children}
        </CommonContext.Provider>
    )
}