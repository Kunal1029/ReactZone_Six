/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import HiContext from "../context/Hi"


function HiMe() {
    const [myName, setName] = useState("")
    const [myUName, setUName] = useState("")

    const { setUser } = useContext(HiContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(myName , myUName , " Form submit ")
        setUser({myName,myUName})
    }

  return (
    <form onSubmit={handleSubmit}>
        
      <input type="text" value={myName} onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={myUName} onChange={(e)=>setUName(e.target.value)} />
      
      <button>Submit</button>
    </form>
  )
}

export default HiMe
