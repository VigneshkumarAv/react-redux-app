import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: ''
}
//create AsyncThunk generates pending, fulfilled, rejected action types. 
//these action types are not created by create slice so needs to be added in extrareducers
export const fetchUsers = createAsyncThunk('user/fetchUsers', //first param action name
()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data) // dont need catch block here as error is handled
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false
            state.users = ''
            state.error = action.error.message
        })

    }
})


export default userSlice.reducer
