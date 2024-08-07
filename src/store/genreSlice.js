import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
  name : 'selGenre',
  initialState : [],
  reducers : {
    addGenre(state, action) {
      return [...action.payload]
    },
    removeGenre(state, action) {
      return state.filter((item) => item !== action.payload )
    }
  }
})

export let { addGenre, removeGenre } = genreSlice.actions

export default genreSlice.reducer;