  export const Reducer = (state, action) => {
    switch (action.kunal) {
      case "completed":
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.myID) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          }),
        };

      case "add":
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: state.todos.length + 1, title: action.title, completed: false },
          ],
        };

      case "updateTitle":
        return { ...state, newTitle: action.title };

      case "del":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.myID),
        };

      case "editTitle":
        return { ...state, editTitle: action.edtitles };
  
      
      case "TaskEdit":
        return {
          ...state,
          todos: state.todos.map((todo)=>{
            if (todo.id === action.editId) {
              return { ...todo, title: action.changeTitle };
            } else {
              return todo;
            }
          })
        }
        
    

      default:
        return state;
    }
  };
