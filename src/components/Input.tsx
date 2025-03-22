import {ChangeEvent, CSSProperties} from "react";

type InputProps = {
    type: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    style?: CSSProperties;
};
export const Input = ({type, value, onChange, style }: InputProps) => {
    return (
        <div>
            <input type={type} value={value} onChange={onChange} style={style}/>
        </div>
    );
};