import { createSlice } from '@reduxjs/toolkit';

const initialState  = [
    
  ];  

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers:{
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const {id, title} = action.payload;
      const task = state.find((task) => task.id === id);
      if(task){
        task.title = title;
      }
    },
    setTasksFromApi: (state, action)=> {
      return action.payload;
    }
  },
});

export const { addTask, removeTask, editTask, setTasksFromApi} = taskSlice.actions;

export default taskSlice.reducer;