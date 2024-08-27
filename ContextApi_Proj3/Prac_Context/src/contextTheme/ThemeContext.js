import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    ThemeMode: "white",
    darkTheme:() =>{},
    lightTheme: () =>{}
});

export const ThemeProvider = ThemeContext.Provider;


export const useTheme =()=>{
    return useContext(ThemeContext);
}
