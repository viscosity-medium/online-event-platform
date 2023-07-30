import {FC, HTMLAttributes} from "react";

const DivContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    style
}) => {

    return (
        <div
            className={className}
            style={style}
        >
            {children}
        </div>
    );

};

export {DivContainer};