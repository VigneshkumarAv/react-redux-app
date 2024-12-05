import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}
const cakeSlice = createSlice ({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state,action) => {
            state.numOfCakes-- // done will the help of immer library underhood
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        } 
    }
})

export default cakeSlice.reducer
export const cakeActions = cakeSlice.actions //named export