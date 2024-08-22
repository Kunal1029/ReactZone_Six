import { useState } from "react"

function App() {
  const [counter , setCounter] = useState(0);

  console.log("Render: Counter =", counter);

  const inc = () => {
    console.log("inc function called");
    setCounter(prev => {
      console.log("Updating counter in inc: prev =", prev);
      return prev + 1;
    });
    setCounter(prev => {
      console.log("Updating counter in inc: prev =", prev);
      return prev + 1;
    });
    setCounter(prev => {
      console.log("Updating counter in inc: prev =", prev);
      return prev + 1;
    });
    setCounter(prev => {
      console.log("Updating counter in inc: prev =", prev);
      return prev + 1;
    });  //the functional form allows each state update to build on the last one within the same render cycle, ensuring the correct final state.
  };//The functional form is special because it guarantees that each update to the state considers all previous updates, even if those updates are batched or delayed. This ensures that your state transitions are reliable and predictable, especially when multiple updates occur in rapid succession.

  const inc2 = () => {
    console.log("inc2 function called");
    setCounter(counter + 1);
    console.log("Counter after 1st setCounter in inc2:", counter + 1);
    setCounter(counter + 1);
    console.log("Counter after 2nd setCounter in inc2:", counter + 1);
    setCounter(counter + 1);
    console.log("Counter after 3rd setCounter in inc2:", counter + 1);
    setCounter(counter + 1);
    console.log("Counter after 4th setCounter in inc2:", counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={inc2}>INC2</button>
    </div>
  )
}

export default App;
