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

const Slider: FC<SliderProps> = ({
    dataInfo
}) => {

    const swiperRef = useRef<SwiperRef>(null);
    const [swiperWidth, setSwiperWidth] = useState<number | undefined>(undefined);

    useResizeWindow({
        functionToExecute: () => {
            resizeSliderSize({swiperRef, setSwiperWidth})
        },
        dependencies: [swiperRef.current]
    })


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
                slidersData[dataInfo].map((dataInfoItem, index) => {
                    return (
                        <SwiperSlide
                            key={`${dataInfoItem.cardTitle}__${dataInfoItem.imageAltDescription}`}
                            className={cls.swiperSlide}
                        >
                            <SlideCard
                                // reference={index === 0 ? slideCardRef : undefined}
                                cardTitle={dataInfoItem.cardTitle}
                                cardDescription={dataInfoItem.cardDescription}
                                imageSource={dataInfoItem.imageSource}
                                imageAltDescription={dataInfoItem.imageAltDescription}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );

};

export {Slider};