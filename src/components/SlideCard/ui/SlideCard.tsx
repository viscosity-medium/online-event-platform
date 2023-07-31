import {HStack, VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import cls from "./SlideCard.module.scss"
import {Image} from "@/components/Image";
import {Text} from "@/components/Text";
import {FC} from "react";
import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";

const SlideCard: FC<SlideCardProps> = ({
    reference,
    cardTitle,
    cardDescription,
    imageSource,
    imageAltDescription
}) => {


    return (
        <VStack
            reference={reference}
            className={cls.slideCard}
            justify={"between"}
        >
            <VStack
                className={cls.infoContent}
                align={"center"}
            >
                <HStack>
                    <Image
                        src={imageSource}
                        alt={imageAltDescription}
                        height={118}
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
                    align={"left"}
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