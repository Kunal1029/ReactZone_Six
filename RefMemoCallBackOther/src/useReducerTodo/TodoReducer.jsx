import { useReducer, useState } from "react";
import { Reducer } from "./Reducer";

function TodoReducer() {
  const initialState = {
    todos: [
      {
        id: 1,
        title: "eat",
        completed: false,
      },
      {
        id: 2,
        title: "code",
        completed: false,
      },
    ],
    newTitle: "", 
    editTitle:"",
  };

  const [todos, dispatch] = useReducer(Reducer, initialState);

  const handleComplete = (todo) => {
    dispatch({ kunal: "completed", myID: todo.id });
  };

  const addInp = (e) => {
    dispatch({ kunal: "updateTitle", title: e.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ kunal: "add", title: todos.newTitle });
    dispatch({ kunal: "updateTitle", title: "" });
  };

  const deltodo = (todo)=>{
    dispatch({kunal: "del", myID: todo.id})
  }
  const [edit, setedit] = useState({ed:false, id: null})
  const editTodo = (todo) =>{
    setedit({ed: !edit.ed, id: todo.id})
    dispatch({ kunal: "editTitle", edtitles: todo.title });
  }
  const handleUpdate = (e)=>{
    dispatch({ kunal: "editTitle", edtitles: e.target.value });
  }

  const updateTodo = (e,todo)=>{
    e.preventDefault();
    dispatch({ kunal: "TaskEdit", changeTitle: todos.editTitle , editId: todo.id});
    dispatch({ kunal: "editTitle", edtitle: "" });
    setedit({ed: false, id: null})
    console.log(todo.id)
  }



  return (
    <div>
      {todos.todos.map((todo) => (

        <div key={todo.id}>

        {edit && edit.id === todo.id ? 

        <form onSubmit={(e)=>updateTodo(e,todo)}>

        <input type="text" value={todos.editTitle} onChange={handleUpdate} />
        <button type="submit">Update</button>

        <button onClick={()=>setedit({ed:false,id:null})}>Cancel</button>
    
        </form>
        : 
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title} & id is {todo.id} &nbsp; 
          </label>
        
          <button onClick={()=>deltodo(todo)}>Del</button> &nbsp; 
          <button onClick={()=>editTodo(todo)}>Edit</button>
          
        </>
      }

        </div>
      ))}

      {edit.ed ? "" : <form onSubmit={addTodo}>
        <input type="text" value={todos.newTitle} onChange={addInp} />
        <button type="submit">Submit</button>
      </form> }

      

      {todos.newTitle}
    </div>
  );
}

export default TodoReducer;
