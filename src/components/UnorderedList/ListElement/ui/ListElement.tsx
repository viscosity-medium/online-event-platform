import {FC, HTMLAttributes, RefObject} from "react";

export interface ListElementProps extends HTMLAttributes<HTMLLIElement>{
    reference?: RefObject<HTMLLIElement>
}

const ListElement: FC<ListElementProps> = ({
    children,
    reference,
    ...props
}) => {

    return (
        <li
            ref={reference}
            {...props}
        >
            {
                children
            }
        </li>
    );

};

export {ListElement};