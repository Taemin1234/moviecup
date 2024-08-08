import { createSlice } from '@reduxjs/toolkit';

const yearSlice = createSlice({
  name : 'year',
  initialState : {
    startYear : null,
    endYear : null
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