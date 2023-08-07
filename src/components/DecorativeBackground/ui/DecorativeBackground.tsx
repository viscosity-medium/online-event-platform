import {HStack} from "@/components/Stack";
import {FC} from "react";
import {GetDecorativeBackgroundContent} from "../model/DecorativeBackground.types";
import cls from "./DecorativeBackground.module.scss"
import {getDecorativeBackgroundContent} from "../model/DecorativeBackground.helpers";

const DecorativeBackground: FC<GetDecorativeBackgroundContent> = ({
    stripeLeft = "none",
    stripeRight = "none",
    background = "none"
}) => {

    const {leftContent, rightContent, backgroundContent} = getDecorativeBackgroundContent({ stripeLeft, stripeRight, background: background });

    return (
        <HStack
            className={cls.decorativeBackground}
        >
            {leftContent && leftContent}
            {rightContent && rightContent}
            {backgroundContent}
        </HStack>
    );
};

export {DecorativeBackground};