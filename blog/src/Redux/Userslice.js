import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentuser : null,
    error : null,
    loading : false

}

 const userslice = createSlice({
    name : 'user',
    initialState ,
    reducers : {
        signinStart : (state) => {
            state.loading = true,
            state.error = null
        },
        siginSuccess : (state, action) => {
            state.currentuser = action.payload,
            state.loading = false,
            state.error = null
        },
        siginError : (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
    }
 })



 export const {siginError , siginSuccess , signinStart} = userslice.actions;
 export default userslice.reducer;