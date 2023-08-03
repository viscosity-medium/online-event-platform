import cls from "./CustomInput.module.scss"
import {FC, InputHTMLAttributes} from "react";

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const CustomInput: FC<CustomInputProps> = ({
    placeholder,
    onChange,
    value
}) => {

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cls.input}
        />
    );

};

export {CustomInput};