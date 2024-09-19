import { createSlice } from '@reduxjs/toolkit';

const winnerSlice = createSlice({
  name : 'winner',
  initialState : [],
  reducers : {
    addWinner(state, action) {   
        return state = action.payload
    }
  }
})

export let { addWinner } = winnerSlice.actions

export default winnerSlice.reducer;