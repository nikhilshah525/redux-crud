import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: nanoid(),
      text: "Nothing to do for now",
      status: false,
    },
  ],
  reducers: {
    addTodos: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
        status: false,
      });
    },
    removeTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodos: (state, action) => {
      let [currentState] = state.filter(
        (todo) => todo.id === action.payload.id
      );
      currentState.status = !action.payload.status;
      state = [...state, currentState];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodos, removeTodos, updateTodos } = todoSlice.actions;

export default todoSlice.reducer;
