import {SlideCardExtendedProps, SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";
import {slidersData} from "@/widgets/common/Slider/model/Sliders.data";

export interface SliderProps {
    dataInfo: keyof SlidersData
}

export interface SlidersData {
    activities: SlideCardProps[],
    giftsShop: SlideCardExtendedProps[]
}