import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Userslice'

 const store = configureStore({
  reducer: {
    user : UserReducer,
  },
})

export default store;