import {GalleryCard} from "@/widgets/common/Gallery/ui/GalleryCard/GalleryCard";
import DefaultGalleryImage from "@/assets/common/gallery/default-image.png";
import VerticalTestImage from "@/assets/common/decorativeBackground/decorativeStripeMagicThings.png"
import { GetContent } from "./Gallery.type";
import {galleryActions} from "@/widgets/common/Gallery/model/Gallery.slice";

export const getContent: GetContent = ({pathname, dispatch, goToAnotherPage}) => {

    if(pathname === "/gallery/christmas-tree-home"){

        return ({
            hTagText: "Конкурс Ёлки - Дом",
            buttonGroup: [
                {
                    title: "Условия конкурса",
                    bgColor: "main",
                    callback: () => {
                        dispatch(galleryActions.setInstructionIsShown(true));
                    }
                },
                {
                    title: "На главную",
                    bgColor: "secondary",
                    callback: () => {
                        goToAnotherPage("/");
                    }
                },
                {
                    title: "Загрузить фото",
                    bgColor: "secondary",
                    callback: () => {}
                }
            ]
        });

    } else if(pathname === "/gallery/christmas-tree-office"){

        return ({
            hTagText: "Конкурс Ёлки - Офис",
            buttonGroup: [
                {
                    title: "Условия конкурса",
                    bgColor: "main",
                    callback: () => {
                        dispatch(galleryActions.setInstructionIsShown(true));
                    }
                },
                {
                    title: "На главную",
                    bgColor: "secondary",
                    callback: () => {
                        goToAnotherPage("/");
                    }
                },
                {
                    title: "Загрузить фото",
                    bgColor: "secondary",
                    callback: () => {}
                }
            ]
        });

    } else if(pathname === "/gallery/advent-calendar"){

        return ({
            hTagText: "Адвент-календарь галерея",
            buttonGroup: [
                {
                    title: "Условия конкурса",
                    bgColor: "secondary",
                    callback: () => {}
                }
            ]
        });

    } else {
        return ({
            hTagText: "",
            buttonGroup: []
        });
    }

};

export const createNCardsData = () => {

    const cardsArray = [];
    const upperLimit = 40

    for(let index = 0;index<upperLimit;index++){

        cardsArray.push(
            DefaultGalleryImage
        );

    }

    return cardsArray;
}