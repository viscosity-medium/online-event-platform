import {Dispatch, RefObject, SetStateAction} from "react";

export interface ResizeGridProperties {
    itemGap: number
    numberOfItems: number
    gridContainerRef: RefObject<HTMLDivElement>
    itemDimensionSize: number
    setRowLinesNumber: Dispatch<SetStateAction<number>>
    setColumnLinesNumber: Dispatch<SetStateAction<number>>
    setAmountOfElementsInRow: Dispatch<SetStateAction<number>>
}