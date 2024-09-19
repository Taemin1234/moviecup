import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './genreSlice'
import yearReducer from './yearSlice'
import langReducer from './langSlice'
import worldcupReducer from './worldcupSlice'
import winnerReducer from './winnerSlice'


export default configureStore({
  reducer: {
    genre : genreReducer,
    year : yearReducer,
    language : langReducer,
    worldcup : worldcupReducer,
    winner : winnerReducer
  }
}) 
