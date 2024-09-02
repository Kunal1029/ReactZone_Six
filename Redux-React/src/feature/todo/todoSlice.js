import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoss: [{ id: null, text: "Hello World", completed: false }],
  editing: {isediting: false,id: 1},
  updating: ""
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todoss.push(todo);
    },
    removeTodo: (state, action) => {
      state.todoss = state.todoss.filter((todo) => todo.id !== action.payload);
    },
    showPayload: (state, action) => {
    //   state.todoss.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return alert(action.payload);
    //     }
    //   });
     alert(action.payload)
    },

    done:(state, action)=>{
        state.todoss = state.todoss.map((todo)=>{
            if(todo.id === action.payload){
                return {...todo,completed:!todo.completed}
            }
            return todo;
     })
    },
    isEdit:(state,action)=>{
        state.editing = {isediting: true,id: action.payload}
    },
    stopEdit:(state,action) =>{
        state.editing = {isediting: false, id: action.payload}
        // alert(action.payload)
    },
    updateTodo:(state,action)=>{
        state.updating = action.payload
    },

    submitUpdate:(state,action)=>{
        state.todoss = state.todoss.map((todo)=>{
            if(todo.id === action.payload){
                return {...todo, text: state.updating}
            }
            return todo;
     })
    }

  },
});

export const {submitUpdate,updateTodo, addTodo, removeTodo, showPayload , done , isEdit ,stopEdit } = todoSlice.actions;
export default todoSlice.reducer;
