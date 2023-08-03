import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";

export interface SliderProps {
    dataInfoType: keyof SlidersData
}

export interface SlidersData {
    activities: Omit<SlideCardProps, "cardType">[],
    giftsShop: Omit<SlideCardProps, "cardType">[]
}