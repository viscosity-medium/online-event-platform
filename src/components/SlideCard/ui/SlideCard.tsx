import {HStack, VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import cls from "./SlideCard.module.scss"
import {Image} from "@/components/Image";
import {Text} from "@/components/Text";
import {FC, useRef} from "react";
import {SlideCardProps} from "@/components/SlideCard/model/SlideCard.types";
import {defineButtonText} from "@/components/SlideCard/model/SlideCard.helpers";
import Link from "next/link";

const SlideCard: FC<SlideCardProps> = ({
    cardType,
    giftTitle,
    giftDescription,
    ImageSource,
    imageAltDescription,
    giftPrice,
    hrefLink,
    buttonText,
    buttonTextAlt
}) => {

    const linkRef = useRef<HTMLAnchorElement>(null);

    const onButtonClick = () => {
        linkRef.current?.click();
    };

    const userGoals = 0;
    const {
        definedButtonText,
        extraButtonClass
    } = defineButtonText({
        cardType, buttonText,
        buttonTextAlt, userGoals, giftPrice
    });
    const cardClass = {
        activities: cls.slideActivityCard,
        giftsShop: cls.slideGiftCard
    };
    const extraClass = {
        unavailableCard: cls.unavailableCard,
        none: ""
    };

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
                    {
                        typeof ImageSource === "object" ? (
                            <Image
                                className={cls.cardImage}
                                src={ImageSource}
                                alt={imageAltDescription}
                            />
                        ) : (
                            <ImageSource/>
                        )
                    }

                    {/*<ImageSource/>*/}
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
                onClick={onButtonClick}
            >
                {
                    definedButtonText
                }
            </Button>
            <Link
                ref={linkRef}
                href={hrefLink}
            />
        </VStack>
    );

};

export {SlideCard};