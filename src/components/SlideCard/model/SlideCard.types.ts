import {RefObject} from "react";

export interface SlideCardProps {
    cardTitle: string
    cardDescription: string
    imageSource: string
    imageAltDescription: string
    reference?: RefObject<HTMLDivElement>
}

export interface SlideCardExtendedProps extends SlideCardProps{
    price: number
}