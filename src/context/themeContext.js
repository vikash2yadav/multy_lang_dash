import React, { createContext, useEffect, useState } from 'react';
export const dashThemeContext = createContext();

export const ThemeContext = ({ children }) => {

    const [themeColor, setThemeColor] = useState('blue');

    useEffect(() => {
        setThemeColor(localStorage.getItem('authorization'))
    }, [])

    return (
        <dashThemeContext.Provider value={{
            themeColor,
            setThemeColor,
        }}>
            {children}
        </dashThemeContext.Provider>
    )
}

