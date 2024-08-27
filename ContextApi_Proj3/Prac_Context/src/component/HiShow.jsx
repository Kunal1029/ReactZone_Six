import { useContext } from "react"
import HiContext from "../context/Hi"

function HiShow() {

    const { user } = useContext(HiContext)

  return (
    <div>
        Hi <br />
      {user ? <b> {user.myName} </b> : "No name "} <br />
      {user ? <b> {user.myUName} </b> : "No surname "}
    </div>
  )
}

export default HiShow
