import { combineReducers, configureStore } from '@reduxjs/toolkit'
import matrixReducer from '@/app/store/matrix/matrix.js'

const rootReducers = combineReducers({
  matrix: matrixReducer
})

const store = configureStore({
  reducer: rootReducers
})

export default store