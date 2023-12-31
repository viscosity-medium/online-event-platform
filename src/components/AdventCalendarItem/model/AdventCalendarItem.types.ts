import {ReactNode, RefObject} from "react";

export type AdventCalendarItemType = "singleItemFilled" | "singleItemEmpty" | "doubleItemHorizontal" | "doubleItemVertical";
export interface AdventCalendarItemProps {
    itemType: AdventCalendarItemType,
    itemNumber: number
    gridColumn?: number
    gridRowStart?: number
    imageSource: ReactNode
    className?: string
}

export interface GetAdventCalendarItemHeight {
    itemRef: RefObject<HTMLButtonElement>
    itemType: AdventCalendarItemType
}

export type AdventCalendarItemsData = {
    itemType: AdventCalendarItemType,
    itemNumber: number
    imageSource: ReactNode
}[]