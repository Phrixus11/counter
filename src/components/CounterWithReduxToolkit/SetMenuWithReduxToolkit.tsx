import {Button} from "../Button.tsx";
import {ChangeEvent} from "react";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounterValue, selectMaxCounterValue} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {counterResetAC, setMaxCounterAC, setStartValueAC} from "../../model/counter-reducer.ts";

type SetMenuProps = {
    setStatusSetMenu: (status: boolean) => void
    setOptions: (newMaxValue: number, newStartValue: number) => void
};
export const SetMenuWithReduxToolkit = ({setOptions}: SetMenuProps) => {
    const startValue = useAppSelector(selectCounterValue)
    const maxValue = useAppSelector(selectMaxCounterValue)
    const dispatch = useAppDispatch();

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const TempValue = Number(e.target.value);
        if (TempValue < 0) {
            dispatch(counterResetAC())
        } else if (TempValue < startValue) {
            dispatch(setMaxCounterAC({maxValue: startValue}))
        } else {
            dispatch(setMaxCounterAC({maxValue: Number(e.currentTarget.value)}))
        }
    }
    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const TempValue = Number(e.target.value);
        if (TempValue <= 0) {
            dispatch(counterResetAC())
        } else if (TempValue > maxValue) {
            dispatch(setStartValueAC({value: maxValue}))
        } else {
            dispatch(setStartValueAC({value: Number(e.currentTarget.value)}))
        }
    }
    const setOptionsForCounter = () => {
        setOptions(maxValue, startValue)
    }


    const setIsDisabled = maxValue < 0 || startValue < 0 || maxValue <= startValue
    const styledErrorInput = {
        border: "1px solid red",
        color: "red",
        outline: "none"
    }
    const styledTitle = setIsDisabled
        ? {color: "red", margin: "0"}
        : {margin: "0"}


    return (
        <div className={"setContainer"}>
            <div className="setMenuContainer">
                <h3 style={styledTitle}>{setIsDisabled ? "Incorrect Value" : "Enter values and press Set"}</h3>
                <span>Max Value</span>
                <div>
                    <input type={"number"} value={maxValue} onChange={getMaxValue}
                           style={setIsDisabled ? styledErrorInput : undefined}/>
                </div>
                <span>Start Value</span>
                <div>
                    <input type={"number"} value={startValue} onChange={getStartValue}
                           style={setIsDisabled ? styledErrorInput : undefined}/>
                </div>
            </div>
            <div className={"buttonContainer"}>
                <Button title={'Set'} onClickHandler={setOptionsForCounter} isDisabled={setIsDisabled}/>
            </div>
        </div>
    );
};