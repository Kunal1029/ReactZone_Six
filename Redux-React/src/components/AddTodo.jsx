import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'
function AddTodo() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput("")
    }
    
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
