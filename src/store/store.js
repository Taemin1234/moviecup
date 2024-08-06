import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './genreSlice'


export default configureStore({
  reducer: {
    genre : genreReducer
  }
}) 
