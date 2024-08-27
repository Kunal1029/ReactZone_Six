import { useReducer } from "react"
import { reducer } from "./Reducer"

function CountReducer() {
    const [state , dispatch] = useReducer(reducer,{count:0,hidden:false})
  return (
    <div>
       <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        {state.count}
      </button>

      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        {state.count}
      </button>

      {state.hidden ? (
        <button onClick={() => dispatch({ type: "hid" })}>Hidden</button>
      ) : (
        <button onClick={() => dispatch({ type: "hid" })}>not hidden</button>
      )}
    </div>
  )
}

export default CountReducer
