import cls from "../ui/DecorativeBackground.module.scss";
import BackgroundWithStick from "@/assets/common/decorativeBackground/stars-with-stick.svg";
import BackgroundWithoutStick from "@/assets/common/decorativeBackground/stars-without-stick.svg";

import {
    Background,
    GetDecorativeBackgroundContent,
    StripeContent
} from "@/components/DecorativeBackground/model/DecorativeBackground.types";

const getSingleSideContent = ({stripeContent, className}:
{
    stripeContent: StripeContent,
    className: string
}) => {
    switch(stripeContent) {
        case "none":
            return <></>;
        case "christmasTreeToys1":
            return <div className={`${cls.christmasTreeToys1} ${className}`}/>
        case "christmasTreeToys2":
            return <div className={`${cls.christmasTreeToys2} ${className}`}/>
        case "christmasMagicThings":
            return <div className={`${cls.magicThings} ${className}`}/>
        default:
            return <></>;
    }
};

const getSingleBackgroundContent = ({backgroundContent, className}: {backgroundContent: Background, className: string}) => {

    switch(backgroundContent){
        case "none": {
            return <></>;
        }
        case "withStick":{
            return <BackgroundWithStick className={className}/>;
        }
        case "withoutStick":{
            return <BackgroundWithoutStick  className={className}/>;
        }
        default: {
            return <></>
        }
    }

};

export const getDecorativeBackgroundContent = ({
    stripeLeft,
    stripeRight,
    background
}: GetDecorativeBackgroundContent) => {

    const leftContent = getSingleSideContent({
        stripeContent: stripeLeft,
        className: `${cls.decorativeElement} ${cls.decorativeLeftElement}`
    });
    const rightContent = getSingleSideContent({
        stripeContent: stripeRight,
        className: `${cls.decorativeElement} ${cls.decorativeRightElement}`
    });
    const backgroundContent = getSingleBackgroundContent({
        backgroundContent: background,
        className: `${cls.decorativeBackground}`
    });

    return {
        leftContent,
        rightContent,
        backgroundContent
    }
};