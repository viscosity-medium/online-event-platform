'use client'

import {VStack} from "@/components/Stack";
import BigLogo from "@/assets/common/personal-account/logo-big.svg";
import cls from "./page.module.scss"
import {Image} from "@/components/Image";
import {Gifts} from "@/widgets/common/Gifts";
import {PersonalAccount} from "@/widgets/common/PersonalAccount";
import MagicBall from "@/assets/common/personal-account/magic-ball.svg";

const Page = () => {

    return (
        <>
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
            <Image
                src={MagicBall}
                alt={"magic-ball.svg"}
                className={cls.magicBall}
                position={"absolute"}
            />
        </>

    );

};

export default Page;