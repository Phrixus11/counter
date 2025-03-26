import {useEffect, useRef, useState} from "react";
import {Scoreboard} from "../Scoreboard.tsx";
import {Button} from "../Button.tsx";
import {SetMenu} from "./SetMenu.tsx";

export const CounterWithSetMenu = () => {
    const START_VALUE = 0
    const lastValueCountFromLocalStorage = localStorage.getItem('lastValueCount');
    const maxValueFromLocalStorage = localStorage.getItem('settingMaxCount')

    const [count, setCount] = useState<number>(lastValueCountFromLocalStorage ? JSON.parse(lastValueCountFromLocalStorage) : 0)
    const [StatusSetMenu, setStatusSetMenu] = useState<boolean>(false)


    const maxValue = useRef<number>(maxValueFromLocalStorage ? JSON.parse(maxValueFromLocalStorage) : 5)
    

    useEffect(() => {
        localStorage.setItem('lastValueCount', JSON.stringify(count))
    }, [count]);

    const increment = () => {
        if (count < maxValue.current) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(START_VALUE)
    }
    const openSetMenu = () => {
        setStatusSetMenu(!StatusSetMenu)
    }
    const setOptions = (newMaxValue: number, newStartValue: number) => {
        maxValue.current = newMaxValue
        setCount(newStartValue)
        openSetMenu()
    }

    return (
        <div>
            <h2>Counter with set value</h2>
            <div className={"counterContainer"}>
                <Scoreboard maxValue={maxValue.current} currentValue={count}/>
                <div className={"buttonContainer"}>
                    <Button onClickHandler={increment} title={'inc'} isDisabled={count >= maxValue.current}/>
                    <Button onClickHandler={reset} title={'reset'} isDisabled={count === START_VALUE}/>
                    <Button onClickHandler={openSetMenu} title={'Set Menu'}/>
                </div>
                {StatusSetMenu && <SetMenu setOptions={setOptions} setStatusSetMenu={setStatusSetMenu}/>}
            </div>
        </div>
    )
};