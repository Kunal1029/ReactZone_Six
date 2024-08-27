import { useState } from "react";
import { useHiContext2 } from "../context/HiContext2";

function HiForm2() {
  const [md, setmd] = useState({ myAge: 0, myEmail: "" });
  const [mdSave, setMdSave] = useState({age:0, email: "na"})
  const [mdSave2, setMdSave2] = useState({date:0, month: "na"})
  const [md2, setmd2] = useState({ Date: 0, month: "" });

  const { setSayHi } = useHiContext2();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmd2({ ...md2, [name]: value });
  };

  const sub2 = (e) => {
    e.preventDefault();
    setMdSave2({date:md2.Date,month:md2.month})
    // setSayHi({mdSave, mdSave2 });
    setSayHi({ mdSave, mdSave2: { date: md2.Date, month: md2.month } });
    setmd2({Date:0,month:"0"})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMdSave({age:md.myAge,email:md.myEmail})
    // setSayHi({mdSave, mdSave2 });
    setSayHi({ mdSave: { age: md.myAge, email: md.myEmail }, mdSave2 });
    setmd({myAge: 0, myEmail: ""})    
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Age ?"
          value={md.myAge}
          onChange={(e) => setmd({ ...md, myAge: e.target.value })}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={md.myEmail}
          onChange={(e) => setmd({ ...md, myEmail: e.target.value })}
        />{" "}
        <br />
        <button>Submit</button>
      </form>
      <h2>{mdSave.age} & {mdSave.email}</h2>

      <h1>Another Form in the Same Component</h1>

      <form onSubmit={sub2}>
        <input
          type="number"
          name="Date"  // Add the name attribute here
          placeholder="Birth Date?"
          value={md2.Date}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          name="month"  // Add the name attribute here
          placeholder="Month"
          value={md2.month}
          onChange={handleChange}
        />{" "}
        <br />
        <button>Submit</button>
      </form>

      <h2>{mdSave2.date} && {mdSave2.month}</h2>
    </div>
  );
}

export default HiForm2;
