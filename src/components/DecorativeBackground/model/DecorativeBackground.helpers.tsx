import ChristmasTreeToys from "@/assets/common/decorativeBackground/decorativeStripeTreeToys.png";
import ChristmasMagicThings from "@/assets/common/decorativeBackground/decorativeStripeMagicThings.png";
import cls from "../ui/DecorativeBackground.module.scss";

import {
    DecorativeBackgroundProps,
    StripeContent
} from "@/components/DecorativeBackground/model/DecorativeBackground.types";
import Image from "next/image";

const getSingleContent = ({stripeContent, className}:
{
    stripeContent: StripeContent,
    className: string
}) => {
    switch(stripeContent) {
        case "none":
            return <></>;
        case "christmasTreeToys":
            return <Image
                src={ChristmasTreeToys}
                alt={"decorativeStripeTreeToys.png"}
                className={className}
            />
        case "christmasMagicThings":
            return <Image
                src={ChristmasMagicThings}
                alt={"decorativeStripeMagicThings.png"}
                className={className}
            />
    }
};

export const getDecorativeBackgroundContent = ({
    stripeLeft,
    stripeRight
}: DecorativeBackgroundProps) => {

    const leftContent = getSingleContent({
        stripeContent: stripeLeft,
        className: `${cls.decorativeElement} ${cls.decorativeLeftElement}`
    });
    const rightContent = getSingleContent({
        stripeContent: stripeRight,
        className: `${cls.decorativeElement} ${cls.decorativeRightElement}`
    });

    return {
        leftContent,
        rightContent
    }
};