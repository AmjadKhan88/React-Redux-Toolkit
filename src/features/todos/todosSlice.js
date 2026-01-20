import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
        date: new Date().toLocaleDateString(),
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addToDo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
