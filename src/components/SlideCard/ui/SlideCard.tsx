import {HStack, VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import cls from "./SlideCard.module.scss"
import {Image} from "@/components/Image";
import {Text} from "@/components/Text";
import {FC} from "react";
import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";
import {defineButtonText} from "@/components/SlideCard/model/SlideCard.helpers";

const SlideCard: FC<SlideCardProps> = ({
    cardType,
    giftTitle,
    giftDescription,
    imageSource,
    imageAltDescription,
    giftPrice,
    hrefLink,
    buttonText,
    buttonTextAlt
}) => {

    const userGoals = 0;
    const {
        definedButtonText,
        extraButtonClass
    } = defineButtonText({
        cardType,
        buttonText,
        buttonTextAlt,
        userGoals,
        giftPrice
    });

    const cardClass = {
        activities: cls.slideActivityCard,
        giftsShop: cls.slideGiftCard
    };

    const extraClass = {
        unavailableCard: cls.unavailableCard,
        none: ""
    }

    return (
        <VStack
            className={`${cls.slideCard} ${cardClass[cardType]} ${extraClass[extraButtonClass]}`}
            justify={"between"}
        >
            <VStack
                className={cls.infoContent}
                align={"center"}
            >
                <HStack>
                    <Image
                        className={cls.cardImage}
                        src={imageSource}
                        alt={imageAltDescription}
                    />
                </HStack>
                <Text
                    tag={"h3"}
                    align={"center"}
                    className={cls.title}
                >
                    {
                        giftTitle
                    }
                </Text>
                <hr className={cls.divider}/>
                {
                    giftPrice && (
                        <Text
                            tag={"h4"}
                            className={cls.giftPrice}
                            color={"lightBlue"}
                        >
                            {`${giftPrice} баллов`}
                        </Text>
                    )
                }
                <Text
                    tag={"p"}
                    align={"left"}
                    className={cls.description}
                >
                    {
                        giftDescription
                    }
                </Text>
            </VStack>
            <Button
                size={"fullSize"}
                backgroundColor={"secondary"}
                borderColor={"none"}
                className={cls.cardButton}
            >
                {
                    definedButtonText
                }
            </Button>
        </VStack>
    );

};

export {SlideCard};