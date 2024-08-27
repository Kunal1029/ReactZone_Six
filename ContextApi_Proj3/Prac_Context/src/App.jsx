/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HiMe from "./component/HiMe";
import { HiContextProvider } from "./context/HiProvide";
import HiShow from "./component/HiShow";

import { HiContextProvider2 } from "./context/HiContext2";
import HiForm2 from "./component/HiForm2";
import HiShow2 from "./component/HiShow2";
import App2 from "./App2";
import ThemeBtn from "./componentTheme/ThemeBtn";
import App3 from "./App3";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   {/* contextApi one way */}
    //   <HiContextProvider>
    //     <div>
    //       <a href="https://vitejs.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <HiMe />
    //     <HiShow />
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}
    //       </button>
    //       <p>
    //         Edit <code>src/App.jsx</code> and save to test HMR
    //       </p>
    //     </div>
    //     <p className="read-the-docs">
    //       Click on the Vite and React logos to learn more
    //     </p>
    //   </HiContextProvider>
    //   {/* contextApi one way end */}

    //   <h1>
    //     Below is Way 2 - Same jsx file contains contextApi creation, Provider,
    //     contex Custom hook
    //   </h1>

    //   {/* contextApi two way */}

    //   <HiContextProvider2>
    //     <HiForm2 />
    //     <h1>Below is Context API data</h1>
    //     <HiShow2 />
    //   </HiContextProvider2>
    //   {/* contextApi Two way end */}
    // </div>

    // <App2 />

    <App3 />



    
  );
}

export default App;
