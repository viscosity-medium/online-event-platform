import {HStack} from "@/components/Stack";
import {FC} from "react";
import {DecorativeBackgroundProps} from "../model/DecorativeBackground.types";
import cls from "./DecorativeBackground.module.scss"
import { getDecorativeBackgroundContent } from "../model/DecorativeBackground.helpers";


const DecorativeBackground: FC<DecorativeBackgroundProps> = ({
    stripeLeft = "none",
    stripeRight = "none"
}) => {

    const {leftContent, rightContent} = getDecorativeBackgroundContent({ stripeLeft, stripeRight });

    return (
        <HStack
            justify={"between"}
            className={cls.decorativeBackground}
        >
            {leftContent}
            {rightContent}
        </HStack>
    );
};

export {DecorativeBackground};