import {useRef, useState} from "react";
import {Scoreboard} from "../Scoreboard.tsx";
import {Button} from "../Button.tsx";
import {SetMenuWithReduxToolkit} from "./SetMenuWithReduxToolkit.tsx";
import {AppDispatch, RootState} from "../../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {counterIncrement, counterReset, setOption} from "../../model/counter-reducer.ts";

export const CounterWithReduxToolkit = () => {
    const START_VALUE = 0
    // const lastValueCountFromLocalStorage = localStorage.getItem('lastValueCount');
    // const maxValueFromLocalStorage = localStorage.getItem('settingMaxCount')

    const count = useSelector<RootState,number>(state=>state.counter.value)
    // const [count, setCount] = useState<number>(lastValueCountFromLocalStorage ? JSON.parse(lastValueCountFromLocalStorage) : 0)
    const dispatch = useDispatch<AppDispatch>();

    const [StatusSetMenu, setStatusSetMenu] = useState<boolean>(false)


    // const maxValue = useRef<number>(maxValueFromLocalStorage ? JSON.parse(maxValueFromLocalStorage) : 5)
    const maxValue = useRef<number>(7)

    // useEffect(() => {
    //     localStorage.setItem('lastValueCount', JSON.stringify(count))
    // }, [count]);

    const increment = () => {
        dispatch(counterIncrement())
        // if (count < maxValue.current) {
        //
        // }
    }
    const reset = () => {
        dispatch(counterReset())
    }
    const openSetMenu = () => {
        setStatusSetMenu(!StatusSetMenu)
    }
    const setOptions = (newMaxValue: number, newStartValue: number) => {
        maxValue.current = newMaxValue
        dispatch(setOption({value: newStartValue}))
        openSetMenu()
    }

    return (
        <div>
            <h2>Counter with Redux Toolkit</h2>
            <div className={"counterContainer"}>
                <Scoreboard maxValue={maxValue.current} currentValue={count}/>
                <div className={"buttonContainer"}>
                    <Button onClickHandler={increment} title={'inc'} isDisabled={count >= maxValue.current}/>
                    <Button onClickHandler={reset} title={'reset'} isDisabled={count === START_VALUE}/>
                    <Button onClickHandler={openSetMenu} title={'Set Menu'}/>
                </div>
                {StatusSetMenu && <SetMenuWithReduxToolkit setOptions={setOptions} setStatusSetMenu={setStatusSetMenu}/>}
            </div>
        </div>
    )
};