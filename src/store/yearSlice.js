import { createSlice } from '@reduxjs/toolkit';

const currentYear = new Date().getFullYear();

const yearSlice = createSlice({
  name : 'year',
  initialState : {
    startYear : 1900,
    endYear : currentYear
  },
  reducers : {
    addStartYear(state, action) {   
        state.startYear = action.payload
    },
    addEndYear(state, action) {   
        state.endYear = action.payload
    }
  }
})

export let { addStartYear, addEndYear } = yearSlice.actions

export default yearSlice.reducer;