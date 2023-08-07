'use client'

import {VStack} from "@/components/Stack";
import BigLogo from "@/assets/common/personal-account/logo-big.svg";
import cls from "./page.module.scss"
import {Image} from "@/components/Image";
import {Gifts} from "@/widgets/common/Gifts";
import {PersonalAccount} from "@/widgets/common/PersonalAccount";
import MagicBall from "@/assets/common/personal-account/magic-ball.svg";
import GalleryBackground from "@/assets/common/decorativeBackground/stars-without-stick.svg";
import {DecorativeBackground} from "@/components/DecorativeBackground";

const Page = () => {

    return (
        <>
            <DecorativeBackground
                stripeLeft={"none"}
                stripeRight={"christmasTreeToys2"}
                background={"withStick"}
            />
            <Image
                src={BigLogo}
                alt={"logo-big.svg"}
                className={cls.logoBig}
                position={"absolute"}
                objectFit={"contain"}
            />
            <VStack
                className={cls.personalAccount}
            >
                <PersonalAccount/>
                <Gifts/>
            </VStack>
            <MagicBall
                alt={"magic-ball.svg"}
                className={cls.magicBall}
                position={"absolute"}
            />
        </>

    );

};

export default Page;