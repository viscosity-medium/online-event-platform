import {Dispatch, RefObject, SetStateAction} from "react";
import {SwiperRef} from "swiper/react";


export interface ResizeSliderSize {
    setSwiperWidth: Dispatch<SetStateAction<number | undefined>>
    swiperRef: RefObject<SwiperRef>
}

export const resizeSliderSize = ({
    setSwiperWidth,
    swiperRef
}: ResizeSliderSize) => {

    // @ts-ignore
    const swiperNodeStyle: CSSStyleDeclaration = window.getComputedStyle(swiperRef.current);
    const swiperWidthValue = +swiperNodeStyle.getPropertyValue('width').replace(/px/,"");
    const swiperMarginValue = (+swiperNodeStyle.getPropertyValue('margin-right').replace(/px/,"")) * 2;

    // @ts-ignore
    const swiperSlideCard = swiperRef.current?.children?.[0].children[0];
    const slidCardNodeStyle: CSSStyleDeclaration = window.getComputedStyle(swiperSlideCard);
    const slidCardWidthValue = +slidCardNodeStyle.getPropertyValue('width').replace(/px/,"");
    const slidCardMarginValue = +slidCardNodeStyle.getPropertyValue('margin-right').replace(/px/,"");

    const cardSizeWithMargin = (slidCardWidthValue + slidCardMarginValue);
    const cardsInSwiper = Math.floor((swiperWidthValue + swiperMarginValue) / cardSizeWithMargin)
    const swiperWidthToSet = (cardsInSwiper !== 0 ? cardsInSwiper : 1)  * cardSizeWithMargin;

    setSwiperWidth(swiperWidthToSet);

}