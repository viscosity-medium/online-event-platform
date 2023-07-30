import {Dispatch, RefObject, SetStateAction} from "react";

export interface ResizeDropDownItemProps {
    isOpen: boolean,
    buttonRef: RefObject<HTMLButtonElement>,
    contentRef: RefObject<HTMLDivElement>,
    listItemRef: RefObject<HTMLLIElement>,
    setTextContentHeight: Dispatch<SetStateAction<number>>,
    setCurtainHeight: Dispatch<SetStateAction<number>>
}

export interface DropDownItemProps {
    title: string
    description: string
}

export interface DropDownData {
    dropdownData: DropDownItemProps[]
}