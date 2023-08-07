'use client'

import {Promo} from "@/widgets/common/Promo";
import {Broadcast} from "../widgets/common/Broadcast";
import {AdventCalendar} from "@/widgets/mainPage/AdventCalendar";
import {Activities} from "@/widgets/mainPage/Activities";
import {Faq} from "@/widgets/common/Faq";
import {VStack} from "@/components/Stack";
import cls from "./page.module.scss"
import {Gifts} from "@/widgets/common/Gifts";
import StarsDecoration from "@/assets/common/decorativeBackground/stars-without-stick.svg"

const Page = () => {

    const generateDecorationContent = () => {
        const arr = [];

        for(let index = 0;index < 6;index++){
            arr.push(
                <StarsDecoration
                    className={cls.starsDecorationItem}
                />
            )
        }

        return arr

    }
    
    return (
        <>
            <Promo/>
            <VStack
                className={cls.mainContentWrapper}
            >
                <VStack className={cls.starsDecoration}>
                    {
                        ...generateDecorationContent()
                    }
                </VStack>
                <Broadcast
                	hTagText={"Трансляция"}
                    decorativeColors={["outer", "middle", "inner"]}
                    embeddedFrameSrc={"https://www.youtube.com/embed/doO5R2xZMFI"}
                />
                <AdventCalendar/>
                <Activities/>
                <Gifts/>
                <Faq/>
            </VStack>
        </>
    );

};

export default Page;