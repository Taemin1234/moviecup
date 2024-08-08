import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name : 'language',
  initialState : [],
  reducers : {
    addLang(state, action) {   
        return state = action.payload
    }
  }
})

export let { addLang } = langSlice.actions

export default langSlice.reducer;