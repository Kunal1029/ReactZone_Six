/* eslint-disable react/prop-types */
import {  createContext, useContext, useEffect, useState } from "react";

export const ThemeContext2 = createContext() 

export const ThemeProvider2 = ({children}) =>{
    const [thememode , setthememode] = useState("white");

    const darkmode = ()=>{
        setthememode("black")
    }
    
    const lightmode = () =>{
        setthememode("white")
    }

    useEffect(()=>{
        const htmls = document.querySelector("html")
        htmls.classList.remove("green","blue","black","white")
        htmls.classList.add(thememode)
    },[thememode])

    return (
        <ThemeContext2.Provider value={{thememode , darkmode ,lightmode}}>
            {children}
        </ThemeContext2.Provider>
    )
}

export const ThemeProvider4 = ({children}) =>{
    const [thememode2 , setthememode2] = useState("blue");

    const greenmode = ()=>{
        setthememode2("green")
    }
    
    const bluemode = () =>{
        setthememode2("blue")
    }

    useEffect(()=>{
        const htmls = document.querySelector("html")
        htmls.classList.remove("green","blue","black","white")
        htmls.classList.add(thememode2)
    },[thememode2])

    return (

        <ThemeContext2.Provider value={{thememode2 , greenmode ,bluemode}}>
            {children}
        </ThemeContext2.Provider>
    )
}

export function useTheme2(){
    return useContext(ThemeContext2)
}


