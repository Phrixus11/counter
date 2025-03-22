import {useRef, useState} from "react";
import {Scoreboard} from "../Scoreboard.tsx";
import {Button} from "../Button.tsx";
import {SetMenu} from "./SetMenu.tsx";

export const CounterWithSetMenu = () => {
    const [count, setCount] = useState<number>(0)
    const [StatusSetMenu, setStatusSetMenu] = useState<boolean>(false)

    const maxValue = useRef<number>(5)
    const startValue = useRef<number>(0)

    const increment = () => {
        if (count < maxValue.current) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(startValue.current)
    }
    const openSetMenu = () => {
        setStatusSetMenu(!StatusSetMenu)
    }
    const setOptions = (newMaxValue: number, newStartValue: number) => {
        maxValue.current = newMaxValue
        startValue.current = newStartValue
        setCount(newStartValue)
        setStatusSetMenu(!StatusSetMenu)
    }


    return (
        <div>
            <h2>Counter with set value</h2>
            <div className={"counterContainer"}>
                <Scoreboard maxValue={maxValue.current} currentValue={count}/>
                <div className={"buttonContainer"}>
                    <Button onClickHandler={increment} title={'inc'} isDisabled={count >= maxValue.current}/>
                    <Button onClickHandler={reset} title={'reset'} isDisabled={count === startValue.current}/>
                    <Button onClickHandler={openSetMenu} title={'Set Menu'}/>
                </div>
                {StatusSetMenu && <SetMenu setOptions={setOptions} setStatusSetMenu={setStatusSetMenu}/>}
            </div>
        </div>
    )
};