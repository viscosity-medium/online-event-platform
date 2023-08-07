import {FC, HTMLAttributes, RefObject} from "react";

interface UnorderedListProps extends HTMLAttributes<HTMLUListElement>{
    reference?: RefObject<HTMLUListElement>
}

const UnorderedList: FC<UnorderedListProps> = ({
    children,
    reference,
    ...otherAttributes
}) => {
    return (
        <ul
            ref={reference}
            {
                ...otherAttributes
            }
        >
            {
                children
            }
        </ul>
    );
};

export {UnorderedList};