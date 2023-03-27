import { createSlice } from "@reduxjs/toolkit";

const storedLikes = localStorage.getItem("favorite");
const initialState = { likePage: storedLikes ? JSON.parse(storedLikes) : [] };
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ADDLIKE: (state, action) => {
      const newItem = action.payload;
      const existItem = state.likePage.find((item) => item.id == newItem.id);

      if (!existItem) {
        state.likePage.push(action.payload);
      }
      localStorage.setItem("favorite", JSON.stringify(state.likePage));
    },
  },
});

export const { ADDLIKE } = favoriteSlice.actions;
export default favoriteSlice.reducer;
