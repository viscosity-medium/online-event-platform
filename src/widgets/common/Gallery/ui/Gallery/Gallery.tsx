import {HStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import {createNCardsData} from "../../model/Gallery.helpers";
import {FC} from "react";
import {GalleryProps} from "../../model/Gallery.type";
import {useAppDispatch, useTypedSelector} from "@/store/store";
import {galleryActions} from "@/widgets/common/Gallery/model/Gallery.slice";
import {UnorderedList} from "@/components/UnorderedList";
import {Instruction} from "@/components/Instruction/ui/Instruction";
import {getInstructionIsShown} from "@/widgets/common/Gallery/model/Gallery.selectors";
import {ListElement} from "@/components/UnorderedList/ListElement/ui/ListElement";
import cls from "./Gallery.module.scss"
import { Modal } from "@/components/Modal";
import {PhotoSwiper} from "@/widgets/common/PhotoSwiper";
import {GalleryCard} from "@/widgets/common/Gallery/ui/GalleryCard/GalleryCard";
import DefaultGalleryImage from "@/assets/common/gallery/default-image.png";

const Gallery: FC<GalleryProps> = ({
    buttonDownGroup
}) => {

    const dispatch = useAppDispatch();
    const instructionIsShown = useTypedSelector(getInstructionIsShown);

    const onButtonClose = () => {
        dispatch(galleryActions.setInstructionIsShown(false));
    };

    const cardsData = createNCardsData();

    return (
        <>
            <HStack
                className={cls.galleryOuterWrapper}
            >
                <UnorderedList
                    className={cls.galleryInnerWrapper}
                >
                    {
                        cardsData.map((singleCardData, index) => {
                            return(
                                <GalleryCard
                                    key={`${index}__galleryCard`}
                                    imageSource={DefaultGalleryImage}
                                    index={index}
                                />
                            )
                        })
                    }
                </UnorderedList>
            </HStack>
            <UnorderedList
                className={cls.galleryButtonWrapper}
            >
                {
                    buttonDownGroup?.map((button, index) => {
                        return(
                            <ListElement
                                key={`${index}__${button}`}
                            >
                                <Button
                                    size={"medium"}
                                    backgroundColor={button.bgColor}
                                    onClick={button.callback}
                                >
                                    <Text
                                        tag={"p"}
                                        align={"center"}
                                    >
                                        {button.title}
                                    </Text>
                                </Button>
                            </ListElement>
                        )
                    })
                }
            </UnorderedList>
            {
                instructionIsShown && <Instruction
                    instructionType={"galleryInstruction"}
                    onCloseInstructionHandler={onButtonClose}
                    className={cls.instruction}
                    buttonSize={"standard"}
                    textAlign={"center"}
                    buttonBackgroundColor={"main"}
                />
            }
            <Modal>
                <PhotoSwiper
                    photos={cardsData}
                />
            </Modal>
        </>
    );

};

export {Gallery};