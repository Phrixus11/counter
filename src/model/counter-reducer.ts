import {createAction, createReducer} from "@reduxjs/toolkit";


export const counterIncrementAC = createAction('counter/incrementCounter')
export const counterResetAC = createAction('counter/resetCounter')
export const setStartValueAC = createAction<{value: number}>('counter/setStartValue')
export const setMaxCounterAC = createAction<{maxValue: number}>('counter/setMaxValue')


const initialState = {
    value: 0,
    maxValue: 5
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(counterIncrementAC, (state) => {
            state.value++
        })
        .addCase(counterResetAC, (state) => {
            state.value = 0
        })
        .addCase(setStartValueAC, (state,action) => {
            state.value = action.payload.value
        })
        .addCase(setMaxCounterAC, (state,action) => {
            state.maxValue = action.payload.maxValue
        })

})