'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';
import {slidersData} from "@/widgets/common/Slider/model/Sliders.data";
import {FC} from "react";
import {SliderProps} from "@/widgets/common/Slider/model/Sliders.types";
import {SlideCard} from "@/components/SlideCard/ui/SlideCard";
import cls from "./Slider.module.scss"

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slider: FC<SliderProps> = ({
    dataInfo
}) => {

    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={"auto"}
            spaceBetween={28}
            autoHeight={true}
            pagination={{
                clickable: true,
                type: "bullets"
            }}
        >
            {
                slidersData[dataInfo].map(dataInfoItem => {
                    return (
                        <SwiperSlide
                            key={`${dataInfoItem.cardTitle}__${dataInfoItem.imageAltDescription}`}
                            className={cls.swiperSlide}
                        >
                            <SlideCard
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