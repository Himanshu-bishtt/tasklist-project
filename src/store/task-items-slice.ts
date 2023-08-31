import { createSlice } from "@reduxjs/toolkit";
import { TodoItemArray } from "../types/types";

const intitalState: TodoItemArray = [
  {
    text: "Football match at Noida Stadium",
    isComplete: false,
    priority: "medium",
  },
  { text: "Guitar practice", isComplete: true, priority: "low" },
  {
    text: "Lunch with friends at Shipra Mall",
    isComplete: false,
    priority: "high",
  },
];

const taskItemSlice = createSlice({
  name: "task-items",
  initialState: intitalState,
  reducers: {
    add(state, action) {},
    remove(state, action) {},
    clear(state) {},
  },
});

export default taskItemSlice.reducer;
