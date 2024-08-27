/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState , useContext } from "react";

export const HiContext2 = createContext()

export const HiContextProvider2 = ({children})=>{
    const [sayHi, setSayHi] = useState(null)

    return (
        <HiContext2.Provider value={{sayHi,setSayHi}}>
            {children}
        </HiContext2.Provider>
    )
}

export function useHiContext2(){
    return useContext(HiContext2);
}


