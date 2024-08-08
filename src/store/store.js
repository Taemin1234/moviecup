import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './genreSlice'
import yearReducer from './yearSlice'
import langReducer from './langSlice'


export default configureStore({
  reducer: {
    genre : genreReducer,
    year : yearReducer,
    language : langReducer
  }
}) 
