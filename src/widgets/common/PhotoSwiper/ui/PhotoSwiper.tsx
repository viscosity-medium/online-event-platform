'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {HStack, VStack} from "@/components/Stack";
import {useAppDispatch, useTypedSelector} from "@/store/store";
import {getCurrentPhotoIndex} from "@/widgets/common/PhotoSwiper/model/PhotoSwiper.selectors";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import {modalActions} from "@/components/Modal/model/Modal.slice";
//import {Swiper} from '../../Swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import cls from "./PhotoSwiper.module.scss";
import {Navigation, Pagination} from "swiper/modules";
import {Image} from "@/components/Image";
import RedCross from "@/assets/common/menu/cross.svg";

const PhotoSwiper = ({photos}: {photos: Array<string | StaticImport>}) => {

    const dispatch = useAppDispatch();
    const currentSlide = useTypedSelector(getCurrentPhotoIndex);

    const onCloseHandler = () => {dispatch(modalActions.setModalIsShown(false))};

    return (
        <VStack
            className={cls.contentWrapper}
        >
            <VStack
                className={cls.buttonWrapper}
            >
                <Button
                    className={cls.closeButton}
                    size={"none"}
                    backgroundColor={"none"}
                    borderColor={"white"}
                    onClick={onCloseHandler}
                >
                    <HStack
                        align={"center"}
                    >
                        <RedCross
                            alt={"close-cross-button.svg"}
                            className={cls.closeCross}
                        />
                        <Text
                            tag={"p"}
                            className={cls.closeText}
                            color={"darkBlue"}
                        >
                            Закрыть
                        </Text>
                    </HStack>
                </Button>
            </VStack>
            <Swiper
                modules={[Pagination, Navigation]}
                className={cls.swiper}
                initialSlide={currentSlide}
                pagination={{
                    clickable: true
                }}
                spaceBetween={"20px"}
                navigation
            >
                {
                    photos.map((dataInfoItem, index) => {
                        return (
                            <SwiperSlide
                                key={`swiperSlide_${index}`}
                                className={cls.swiperSlide}
                            >
                                <HStack className={cls.inner}>
                                    <Image
                                        src={dataInfoItem}
                                        alt={`swiperCard_${index}`}
                                        className={cls.swiperPhoto}
                                        objectFit={"contain"}
                                    />
                                </HStack>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </VStack>
    );
};

export {PhotoSwiper};