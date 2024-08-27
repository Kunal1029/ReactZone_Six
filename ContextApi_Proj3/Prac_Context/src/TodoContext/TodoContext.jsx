/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Eat", isdone: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id,todo) => {},
  toggleComplete: (id) => {},
});

export  const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}
