import {useState} from "react";
import {Scoreboard} from "../Scoreboard.tsx";
import {Button} from "../Button.tsx";
import {SetMenuWithReduxToolkit} from "./SetMenuWithReduxToolkit.tsx";
import {counterIncrementAC, counterResetAC, setMaxCounterAC, setStartValueAC} from "../../model/counter-reducer.ts";
import {selectCounterValue, selectMaxCounterValue} from "../../model/counter-selectors.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";

export const CounterWithReduxToolkit = () => {
    const START_VALUE = 0

    const count = useAppSelector(selectCounterValue)
    const maxValue = useAppSelector(selectMaxCounterValue)
    const dispatch = useAppDispatch();

    const [StatusSetMenu, setStatusSetMenu] = useState<boolean>(false)

    const increment = () => {
        dispatch(counterIncrementAC())
        // if (count < maxValue.current) {
        //
        // }
    }
    const reset = () => {
        dispatch(counterResetAC())
    }
    const openSetMenu = () => {
        setStatusSetMenu(!StatusSetMenu)
    }
    const setOptions = (newMaxValue: number, newStartValue: number) => {
        dispatch(setMaxCounterAC({maxValue: newMaxValue}))
        dispatch(setStartValueAC({value: newStartValue}))
        openSetMenu()
    }

    return (
        <div>
            <h2 className={'mainTitle'}>Counter on Redux Toolkit with Set Menu and LocalStorage</h2>
            <div className={"counterContainer"}>
                <Scoreboard maxValue={maxValue} currentValue={count}/>
                <div className={"buttonContainer"}>
                    <Button onClickHandler={increment} title={'inc'} isDisabled={count >= maxValue}/>
                    <Button onClickHandler={reset} title={'reset'} isDisabled={count === START_VALUE}/>
                    <Button onClickHandler={openSetMenu} title={'Set Menu'}/>
                </div>
                {StatusSetMenu && <SetMenuWithReduxToolkit setOptions={setOptions} setStatusSetMenu={setStatusSetMenu}/>}
            </div>
        </div>
    )
};