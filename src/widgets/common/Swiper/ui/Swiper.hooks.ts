import {RefObject, useEffect} from "react";

export const useInjectStyles = ({swiperRef, swiperData}: {swiperRef:  RefObject<any>, swiperData: any}) => {

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: true,
            // These are new...
            injectStyles: [
                `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
            ],
            injectStylesUrls: [""]
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);
}