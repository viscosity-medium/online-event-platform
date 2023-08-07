"use client"

import {FC, useRef} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Image} from "@/components/Image";
import {register} from "swiper/element/bundle";
import cls from "./Swiper.module.scss"
import {useInjectStyles} from "@/widgets/common/Swiper/ui/Swiper.hooks";

register();

export interface SwiperSkeletonProps {
    swiperData: any
}

const SwiperSkeleton: FC<SwiperSkeletonProps> = ({
    swiperData
}) => {

    const swiperRef = useRef<any>(null);

    //useInjectStyles({swiperRef, swiperData});
    const onContainerClick = () => {
        console.log(swiperRef.current)
    }

    return (
        <>
            <swiper-container
                ref={swiperRef}
                navigation={"true"}
                pagination={{
                    clickable: true,
                    type: "bullets"
                }}
                onClick={onContainerClick}
                class={cls.swiperContainer}
            >
                {
                    swiperData.map((swiperDataItem: string | StaticImport, index: number)=>{
                        return(
                            <swiper-slide
                                key={`swiper-slide-${index}`}
                                class={cls.swiperSlide}
                            >
                                <Image
                                    src={swiperDataItem}
                                    alt={`swiperCard_${index}`}
                                    className={cls.swiperPhoto}
                                    objectFit={"contain"}
                                />
                            </swiper-slide>
                        )
                    })
                }
            </swiper-container>
            <div className={cls.swiperPagination}></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            {/*<pagination class={cls.pagination}></pagination>*/}
            {/*<navigation-prev class={"swiper-button-prev"}></navigation-prev>*/}
            {/*<navigation-next class="swiper-button-next"></navigation-next>*/}
        </>

    );
};

export {SwiperSkeleton};