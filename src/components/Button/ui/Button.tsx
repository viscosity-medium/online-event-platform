import {FC} from 'react';
import cls from './Button.module.scss';
import {combineClassnames} from "@/helpers/helpers";
import {ButtonBorderColor, ButtonColor, ButtonProps, ButtonSize} from "../model/Button.types";

const Button: FC<ButtonProps> = ({
	className = "",
	children,
    reference,
    size = "none",
    backgroundColor = "none",
    borderColor = "white",
	...otherProps
}) => {

    const colorClasses: Record<ButtonColor, string> = {
        main: cls.mainColor,
        secondary: cls.secondaryColor,
        active: cls.activeColor,
        passive: cls.passiveColor,
        submit: cls.submitColor,
        none: cls.noColor
    };

    const borderColorClasses: Record<ButtonBorderColor, string> = {
        white: cls.borderWhite,
        peach: cls.borderPeach,
        none: cls.borderNone
    };

    const sizeClasses: Record<ButtonSize, string> = {
        fullSize: cls.fullSizeWidth,
        standard: cls.standardWidth,
        long: cls.longWidth,
        medium: cls.mediumWidth,
        none: cls.noneSize
    };

    const classes = [
        className,
        colorClasses[backgroundColor],
        borderColorClasses[borderColor],
        sizeClasses[size]
    ];

    return (
        <button
            type="button"
            ref={reference}
            className={combineClassnames(cls.button, {}, classes)}
            {...otherProps}
        >
            {children}
        </button>
    );

};

export { Button };
