import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  showPayload,
  done,
  isEdit,
  stopEdit,
  updateTodo, submitUpdate
} from "../feature/todo/todoSlice";

function Todos() {
  const todoss = useSelector((state) => state.todoss);
  const dispatch = useDispatch();

  const editing = useSelector((state) => state.editing);
  let updation = useSelector((state) => state.updating);


  const handleChange =(e)=>{
    dispatch(updateTodo(e.target.value))
  }

  const handleSubmit = (e,id)=>{
    e.preventDefault();
    dispatch(submitUpdate(id))
    dispatch(updateTodo(""))
    dispatch(stopEdit(null))
  }

  return (
    <div>
      TODOS
      <ul>
        {todoss.map((todo) => (
          <li key={todo.id}>
            
            {editing.isediting && editing.id === todo.id ? (
              <>
              <form onSubmit={(e)=>handleSubmit(e,todo.id)}>
                <input type="text" value={updation} onChange={handleChange}  />
               <br /> <button>Update</button>
              </form>
                 &nbsp;
                <button onClick={() => dispatch(stopEdit(null))}>Cancel</button>
              </>
            ) : (
              <>
              {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>{" "}
                &nbsp;
                <button onClick={() => dispatch(showPayload(todo.text))}>
                  payload
                </button>
                <button onClick={() => dispatch(done(todo.id))}>
                  {todo.completed ? "Gud" : "pending"}
                </button>
                <button onClick={() => dispatch(isEdit(todo.id))}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Todos;
