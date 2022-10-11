import { createSlice } from "@reduxjs/toolkit";

let initialState = []


let todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload,
        id: Date.now(),
        completed: false
      }
      state.push(newTodo)
    }
  }
})



export const { addTodo } = todoSlice.actions

export default todoSlice.reducer