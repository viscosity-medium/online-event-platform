import {StaticImageData} from "next/image";
import {SlidersData} from "@/widgets/common/Slider/model/Sliders.types";

export interface SlideCardProps {
    cardType: keyof SlidersData
    giftTitle: string
    giftDescription: string
    buttonText: string
    hrefLink: string
    ImageSource: any
    imageAltDescription: string
    giftPrice?: number
    buttonTextAlt?: string
}
