import { useHiContext2 } from "../context/HiContext2"

function HiShow2() {
    const { sayHi } = useHiContext2();
  return (
    <div>
      {sayHi ? sayHi.mdSave.age : "na age "} <br />
      {sayHi ? sayHi.mdSave.email : "na Email "} <br />
      {sayHi ? sayHi.mdSave2.date : "na date "} <br />
      {sayHi ? sayHi.mdSave2.month : "na month "} <br />
    </div>
  )
}

export default HiShow2
