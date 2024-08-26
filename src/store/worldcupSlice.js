import { createSlice } from '@reduxjs/toolkit';

const worldcupSlice = createSlice({
  name : 'selWorldcup',
  initialState : [],
  reducers : {
    addWorldcup(state, action) {   
      return state = action.payload
    }
  }
})

export let { addWorldcup } = worldcupSlice.actions

export default worldcupSlice.reducer;