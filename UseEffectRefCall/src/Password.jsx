import { useState } from "react"
import "./App.css"
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function Password() {

    const [password, setPassword] = useState(0);
    const [length, setLength] = useState(0);
    const [numAllow, setNumAllow] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);

    const copyy = useRef(null);

    const copycat = useCallback(()=>{
        copyy.current?.select()
        // copyy.current?.setSelectionRange(0,5)
        window.navigator.clipboard.writeText(password)
    },[password])

    const pasGen = useCallback(()=>{
        let pas = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(numAllow){
            str =  str+ "1023456789"
        }
        if(specialChar){
            str = str+ "~!@#$%^&*()-_+=}]{[:;";
        }

        for(let i = 0;i<length;i++){
            const rand = Math.floor(Math.random() * str.length + 1);
            pas = str.charAt(rand) + pas;
        }

        setPassword(pas);

    },[numAllow,specialChar,length,setPassword])


    
    useEffect(()=>{
        pasGen();
    },[pasGen])


  return (
    <div>
      <input type="text" ref={copyy} value={password} readOnly  /> &nbsp;
      <button onClick={copycat}>copy</button>

      <div>
        <input type="range" min={1} max={50} value={length} onChange={(e)=>setLength(e.target.value)} />
        <label htmlFor="">Length</label>
      </div>

      <div>
        <input type="checkbox" value={numAllow} onChange={()=>setNumAllow((prev)=>!prev)} />
        <label htmlFor="">Number Allowed</label>
      </div>

      <div>
        <input type="checkbox" value={specialChar} onChange={()=>setSpecialChar((prev)=>!prev)} />
        <label htmlFor="">Special Allowed</label>
      </div>
    </div>
  )
}

export default Password
