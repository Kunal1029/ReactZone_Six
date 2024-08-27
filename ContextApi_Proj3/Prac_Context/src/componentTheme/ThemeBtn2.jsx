import { useState } from "react";
import { useTheme2 } from "../contextTheme/ThemeContext2"
function ThemeBtn2() {
  const {darkmode , lightmode } = useTheme2();

  // const handleChange = (e) =>{
    
  //   if(e.currentTarget.checked){
  //     darkmode();
  //   }else{
  //     lightmode();
  //   }
  // }

  // const handleChange2 = (e) =>{
    
  //   if(e.currentTarget.checked){
  //     greenmode();
  //   }else{
  //     bluemode();
  //   }
  // }

  const [count,setCont] = useState(0)

  const btnHandle = (e) =>{
    setCont(e)
   
    if(e === 4){
      lightmode();
    }
   
    if(e === 3){
      darkmode();
    }

    console.log(e)
  }

  return (
    <div>
      {/* <input type="checkbox" onChange={handleChange} />
      <span>Change Way 2</span>

      <input type="checkbox" onChange={handleChange2} />
      <span>Change Way In Blue or Green</span> */}
       
      {count} <br />
      <button onClick={()=>btnHandle(3)}>black</button>
      <button onClick={()=>btnHandle(4)}>white</button>
    </div>
  )
}

export default ThemeBtn2
