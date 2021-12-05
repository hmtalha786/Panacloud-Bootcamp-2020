import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialData = [{ id: "1", title: "Something", state: "TASK_INBOX" }];
const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: initialData,
  reducers: {
    addTask: (state: any, action) => {
      let obj = {
        title: action.payload,
        id: Math.floor(Math.random() * 100).toString(),
        state: "TASK_INBOX",
      };
      return (state = [...state, obj]);
    },
    archiveTask: (state: any, action) => {
      return state.map((task: any) =>
        task.id === action.payload ? { ...task, state: "TASK_ARCHIVED" } : task
      );
    },
    pinTask: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload) {
          if (task.state !== "TASK_PINNED") task.state = "TASK_PINNED";
          else task.state = "TASK_INBOX";
        }
      });
    },
  },
});
const store = configureStore({
  reducer: allTasksSlice.reducer,
});
export default store;
export const { archiveTask, pinTask, addTask } = allTasksSlice.actions;
export { allTasksSlice };
