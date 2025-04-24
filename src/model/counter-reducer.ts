import {createAction, createReducer} from "@reduxjs/toolkit";


export const counterIncrement = createAction('counter/incrementCounter')
export const counterReset = createAction('counter/resetCounter')
export const setOption = createAction<{value: number}>('counter/setOption')


const initialState = {
    value: 0
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(counterIncrement, (state) => {
            state.value++
        })
        .addCase(counterReset, (state) => {
            state.value = 0
        })
        .addCase(setOption, (state,action) => {
            state.value = action.payload.value
        })

})