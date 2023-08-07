import {ButtonHTMLAttributes, RefObject} from "react";

export type ButtonColor = "main" | "secondary" | "active" | "passive" | "submit" | "none";
export type ButtonBorderColor = "white" | "peach" | "none";
export type ButtonSize = "standard" | "medium" | "long" | "fullSize" | "none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    reference?: RefObject<HTMLButtonElement>
    backgroundColor?: ButtonColor,
    borderColor?: ButtonBorderColor
    size?: ButtonSize
}