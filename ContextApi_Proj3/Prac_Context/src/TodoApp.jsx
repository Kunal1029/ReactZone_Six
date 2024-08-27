import { useState } from "react"
import { TodoProvider } from "./TodoContext/TodoContext"

function TodoApp({children}) {
    const [todo,setTodo] = useState([])

    const addTodo = (todo) =>{
        setTodo((prev)=>(
            
        ))
    }
    


  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
      {children}
    </TodoProvider>
  )
}

export default TodoApp
