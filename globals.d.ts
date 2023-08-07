import React from "react";

export interface SwiperContainer extends React.DetailedHTMLProps<React.HTMLAttributes<SwiperContainer>, SwiperContainer> {
    navigation?: any
    pagination?: any
    class?: string
}

export interface SwiperItem extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    class?: string
}



export declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': SwiperContainer;
            'swiper-slide': SwiperItem;
            'pagination': SwiperItem,
            'navigation-prev': SwiperItem,
            'navigation-next': SwiperItem
        }
    }
}