import {RootState} from "../app/store.ts";

export const selectCounterValue = (state: RootState): number => state.counter.value
export const selectMaxCounterValue = (state: RootState): number => state.counter.maxValue
