import {SwiperSkeleton} from "@/widgets/common/Swiper/ui/SwiperSkeleton";
import {FC} from "react";

interface SwiperProps {
    swiperData: any
}

const Swiper: FC<SwiperProps> = ({
    swiperData
}) => {
    return (
        <SwiperSkeleton
            swiperData={swiperData}
        />
    );
};

export {Swiper};