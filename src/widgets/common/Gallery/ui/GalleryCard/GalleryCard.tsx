import {Image} from "@/components/Image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {ListElement} from "@/components/UnorderedList/ListElement/ui/ListElement";
import {LikesPanel} from "@/components/LikesPanel";
import {useAppDispatch} from "@/store/store";
import {modalActions} from "@/components/Modal/model/Modal.slice";
import {photoSwiperActions} from "@/widgets/common/PhotoSwiper/model/PhotoSwiper.slice";
import cls from "./GalleryCard.module.scss";
import {HStack} from "@/components/Stack";
import {Text} from "@/components/Text";

const GalleryCard = ({
    imageSource,
    index
}: {
    imageSource: string | StaticImport
    index: number
}) => {

    const dispatch = useAppDispatch();
    const showModal = () => {
        dispatch(modalActions.setModalIsShown(true));
        dispatch(photoSwiperActions.setCurrentPhotoIndex(index))
    };

    return (
        <ListElement
            className={cls.galleryCard}
        >
            <Image
                position={"absolute"}
                src={imageSource}
                alt={"gallery-card"}
                objectFit={"cover"}
                className={cls.galleryCard_image}
                onClick={showModal}
            />
            <HStack
                className={cls.inlay}
            >
                <Text
                    tag={"p"}
                    color={"white"}
                >
                    Нажмите, чтобы открыть
                </Text>
            </HStack>
            <LikesPanel/>
        </ListElement>
    );

};

export {GalleryCard};