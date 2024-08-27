import { useEffect, useState } from "react"
// import { useTheme } from "./contextTheme/ThemeContext"
import { ThemeProvider } from "./contextTheme/ThemeContext"
// import ModeShow from "./componentTheme/ModeShow"
import ThemeBtn from "./componentTheme/ThemeBtn"

function App2() {
    
    const [ThemeMode, setThemeMode] = useState("white")

    const darkTheme = () =>{
        setThemeMode("black")
    }
    const lightTheme = () =>{
        setThemeMode("white")
    }

    useEffect(() => {
        const htmlElement = document.querySelector("html");
        htmlElement.classList.remove("white", "black");
        htmlElement.classList.add(ThemeMode);
    }, [ThemeMode]);

  return (
    <ThemeProvider value={{darkTheme , lightTheme , ThemeMode}}>
        <ThemeBtn />
        {/* <ModeShow /> */}
    </ThemeProvider>
  )
}

export default App2
