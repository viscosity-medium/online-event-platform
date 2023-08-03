'use client'
import {FC, useState} from "react";
import cls from "./Checkbox.module.scss";

interface Checkbox {
    checkboxText: string
    isDefaultChecked: boolean
    className?: string
}

const Checkbox: FC<Checkbox> = ({
    checkboxText,
    className,
    isDefaultChecked
}) => {

    return (
        <div
            className={`${className} ${cls.checkbox}`}
        >
            <input
                type="checkbox"
                defaultChecked={isDefaultChecked}
                className={cls.input}
            />
            <label
                className={cls.label}
            >
                {
                  checkboxText
                }
            </label>

        </div>
    );

};

export {Checkbox};