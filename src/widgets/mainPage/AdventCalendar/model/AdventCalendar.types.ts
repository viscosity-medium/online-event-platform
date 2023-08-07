import {Dispatch, RefObject, SetStateAction} from "react";
import adventCalendarTask1 from "@/assets/mainPage/adventCalendar/advent-calendar-task-1.png";
import {StaticImageData} from "next/image";

export interface ResizeGridProperties {
    itemGap: number
    numberOfItems: number
    gridContainerRef: RefObject<HTMLDivElement>
    itemDimensionSize: number
    setRowLinesNumber: Dispatch<SetStateAction<number>>
    setColumnLinesNumber: Dispatch<SetStateAction<number>>
    setAmountOfElementsInRow: Dispatch<SetStateAction<number>>
}

export interface AdventContentItem{
    task: string,
    img?: StaticImageData
}