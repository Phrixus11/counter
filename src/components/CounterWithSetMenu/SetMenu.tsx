import {Button} from "../Button.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {Input} from "../Input.tsx";

type SetMenuProps = {
    setStatusSetMenu: (status: boolean) => void
    setOptions: (newMaxValue: number, newStartValue: number) => void
};
export const SetMenu = ({setOptions}: SetMenuProps) => {
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);

    useEffect(() => {
        const maxValueFromLocalStorage = localStorage.getItem('settingMaxCount');
        const startValueFromLocalStorage = localStorage.getItem('settingStartCount');
        if (maxValueFromLocalStorage && startValueFromLocalStorage) {
            setMaxValue(JSON.parse(maxValueFromLocalStorage))
            setStartValue(JSON.parse(startValueFromLocalStorage))
        }
    }, []);

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const TempValue = Number(e.target.value);
        if (TempValue <= 0) {
            setMaxValue(0)
        } else if (TempValue < startValue) {
            setMaxValue(startValue)
        } else {
            setMaxValue(Number(e.currentTarget.value))
        }
    }
    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const TempValue = Number(e.target.value);
        if (TempValue <= 0) {
            setStartValue(0)
        } else if (TempValue > maxValue) {
            setStartValue(maxValue)
        }
        else {
            setStartValue(Number(e.currentTarget.value))
        }
    }
    const setOptionsForCounter = () => {
        localStorage.setItem('settingMaxCount', JSON.stringify(maxValue))
        localStorage.setItem('settingStartCount', JSON.stringify(startValue))
        setOptions(maxValue, startValue)
    }


    const setIsDisabled = maxValue < 0 || startValue < 0 || maxValue <= startValue
    const styledErrorInput = {
        border: "1px solid red",
        color: "red",
        outline: "none"
    }

    return (
        <div className={"setContainer"}>
            <div className="setMenuContainer">
                <h3 style={setIsDisabled?{color: "red", margin: "0"}:{margin: "0"}}>{setIsDisabled?"Incorrect Value":"Enter values and press Set"}</h3>
                <span>Max Value</span>
                <Input type={"number"} value={maxValue} onChange={getMaxValue}
                       style={setIsDisabled ? styledErrorInput : undefined}/>
                <span>Start Value</span>
                <Input type={"number"} value={startValue} onChange={getStartValue}
                       style={setIsDisabled ? styledErrorInput : undefined}/>
            </div>
            <div className={"buttonContainer"}>
                <Button title={'Set'} onClickHandler={setOptionsForCounter} isDisabled={setIsDisabled}/>
            </div>
        </div>
    );
};