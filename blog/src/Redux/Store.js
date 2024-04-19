import { configureStore , combineReducers } from '@reduxjs/toolkit'
import UserReducer from './Userslice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'



const rootReducer = combineReducers({
    user : UserReducer,
})

const persistconfig = {
  key : 'root',
  storage,
  version : 1
}


const persistreducer = persistReducer(persistconfig , rootReducer)

 const store = configureStore({
  reducer: persistreducer,
  middleware : (getDefaultMiddleware) => 
  getDefaultMiddleware({serializableCheck : false})
})

export default store;
export const persistor = persistStore(store)