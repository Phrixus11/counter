import {useRef, useState} from "react";
import {Scoreboard} from "../Scoreboard.tsx";
import {Button} from "../Button.tsx";

// let maxValue: number = Math.floor(Math.random()*5)+1
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1
}

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const maxValue = useRef<number>(getRandomNumber())

    const increment = () => {
        if (count < maxValue.current) {
            setCount(count + 1)
        }

    }
    const reset = () => {
        setCount(0)
        maxValue.current = getRandomNumber()
    }


    return (
        <div>
            <h2>Counter with random value</h2>
            <div className={"counterContainer"}>
                <Scoreboard maxValue={maxValue.current} currentValue={count}/>
                <div className={"buttonContainer"}>
                    <Button onClickHandler={increment} title={'inc'} isDisabled={count === maxValue.current}/>
                    <Button onClickHandler={reset} title={'reset'} isDisabled={count === 0}/>
                </div>
            </div>
        </div>
    )
};