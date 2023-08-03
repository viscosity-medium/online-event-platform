'use client';

import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';
import {slidersData} from "@/widgets/common/Slider/model/Sliders.data";
import {FC, useEffect, useRef, useState} from "react";
import {SliderProps} from "@/widgets/common/Slider/model/Sliders.types";
import {SlideCard} from "@/components/SlideCard/ui/SlideCard";
import cls from "./Slider.module.scss"

import 'swiper/scss';
import 'swiper/scss/pagination';
import {useResizeWindow} from "@/hooks/hooks";
import {resizeSliderSize} from "@/widgets/common/Slider/model/Slider.hooks";
import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";

const Slider: FC<SliderProps> = ({
    dataInfoType,
}) => {

    const swiperRef = useRef<SwiperRef>(null);
    const [swiperWidth, setSwiperWidth] = useState<number | undefined>(undefined);

    useResizeWindow({
        functionToExecute: () => {
            resizeSliderSize({
                swiperRef,
                setSwiperWidth
            })
        },
        dependencies: [swiperRef.current]
    });

    return (
        <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            className={cls.swiper}
            slidesPerView={"auto"}
            spaceBetween={40}
            autoHeight={true}
            pagination={{
                clickable: true,
                type: "bullets"
            }}
            style={{
                width: swiperWidth && `${swiperWidth}px`
            }}
        >
            {
                slidersData[dataInfoType].map((dataInfoItem, index) => {
                    return (
                        <SwiperSlide
                            key={`${dataInfoItem.giftTitle}__${dataInfoItem.imageAltDescription}`}
                            className={cls.swiperSlide}
                        >
                            <SlideCard
                                cardType={dataInfoType}
                                giftTitle={dataInfoItem.giftTitle}
                                giftDescription={dataInfoItem.giftDescription}
                                imageSource={dataInfoItem.imageSource}
                                imageAltDescription={dataInfoItem.imageAltDescription}
                                giftPrice={dataInfoItem.giftPrice}
                                buttonText={dataInfoItem.buttonText}
                                buttonTextAlt={dataInfoItem.buttonTextAlt}
                                hrefLink={dataInfoItem.hrefLink}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );

};

export {Slider};