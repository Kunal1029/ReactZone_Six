// import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
// function App() {
//   const [length, setLength] = useState(0);
//   const [numAllow, setNumAllow] = useState(false);
//   const [charAllow, setCharAllow] = useState(false);
//   const [Password, setPassword] = useState(0);

import Password from "./Password"

//   const copyy = useRef(null);

//   const passGen = useCallback(() => {
//     let pas = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numAllow) {
//       str += "0123456789";
//     }
//     if (charAllow) {
//       str += "!~@#$%^&*()_-+=|`}{[];:'.>,</?";
//     }

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pas = str.charAt(char) + pas;
//     }
//     setPassword(pas);
//   }, [length, numAllow, charAllow, setPassword]);


//   const copyClip = useCallback(()=>{
//     copyy.current?.select()
//     copyy.current?.setSelectionRange(0,5)
//     window.navigator.clipboard.writeText(Password)
//   },[Password])


//   useEffect(()=>{
//     passGen()
//   },[length, charAllow, numAllow, passGen])

//   return (
//     <div>
//       <h1>Password Generator</h1>
//       <div>
//         <input
//           type="text"
//           value={Password}
//           readOnly
//           ref={copyy}
//           name="Generate Password"
//           id=""
//         />{" "}
//         &nbsp;
//         <button onClick={copyClip}>Copy</button>
//       </div>

//       <div>
//         <input
//           type="range"
//           min={5}
//           max={100}
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//         />
//         <label htmlFor="">length : {length}</label>
//       </div>

//       <div>
//         <input
//           type="checkbox"
//           defaultChecked={charAllow}
//           onChange={()=>{setCharAllow((prev)=>!prev)}}
//         />
//         <label htmlFor="">
//           Character
//         </label>
//       </div>

//       <div>
//         <input
//           type="checkbox"
//           defaultChecked={numAllow}
//           onChange={()=>{setNumAllow((prev) => !prev)}}
//         />
//         <label htmlFor="">
//           Number
//         </label>
//       </div>
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <div>
      <Password />
    </div>
  )
}

export default App
