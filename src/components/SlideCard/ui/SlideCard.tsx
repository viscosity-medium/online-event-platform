import {HStack, VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import cls from "./SlideCard.module.scss"
import {Image} from "@/components/Image";
import {Text} from "@/components/Text";
import {FC} from "react";
import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";

const SlideCard: FC<SlideCardProps> = ({
    cardTitle,
    cardDescription,
    imageSource,
    imageAltDescription
}) => {

    return (
        <VStack
            className={cls.slideCard}
            justify={"between"}
        >
            <VStack
                className={cls.infoContent}
            >
                <HStack>
                    <Image
                        src={imageSource}
                        alt={imageAltDescription}
                        height={158}
                    />
                </HStack>
                <Text
                    tag={"h3"}
                    align={"center"}
                    className={cls.title}
                >
                    {
                        cardTitle
                    }
                </Text>
                <Text
                    tag={"p"}
                    align={"center"}
                    className={cls.description}
                >
                    {
                        cardDescription
                    }
                </Text>
            </VStack>
            <Button
                size={"fullSize"}
                backgroundColor={"secondary"}
                borderColor={"none"}
                className={cls.cardButton}
            >Пройти тест</Button>
        </VStack>
    );

};

export {SlideCard};