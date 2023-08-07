'use client'

import {DecorativeBackground} from "@/components/DecorativeBackground";
import {Broadcast} from "@/widgets/common/Broadcast";
import {HStack, VStack} from "@/components/Stack";
import cls from "./page.module.scss"
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import {useState} from "react";
import backgroundImage from "@/assets/common/decorativeBackground/stars-without-stick.svg"
import {Instruction} from "@/components/Instruction";

const MinecraftPage = () => {

    const [instructionIsShown, setInstructionIsShown] = useState<boolean>(false);

    const onConnectionButtonClick = () => {

    };

    const onInstructionButtonClick = () => {
        setInstructionIsShown(true);
    };

    const onCloseInstructionButtonClick = () => {
        setInstructionIsShown(false);
    };

    return (
        <>
            <DecorativeBackground
                stripeLeft={"christmasTreeToys1"}
                stripeRight={"christmasMagicThings"}
                background={"withoutStick"}
            />
            <VStack
                className={cls.broadcastWrapper}
            >
                <Broadcast
                    hTagText={"Транляция МАЙНКРАФТ"}
                    decorativeColors={["outer", "middle", "inner"]}
                    textAlign={"start"}
                    instructionIsShown={instructionIsShown}
                    embeddedFrameSrc={"https://www.youtube.com/embed/vtnFgiiSdaE"}
                >
                    <Instruction
                        buttonSize={"medium"}
                        buttonBackgroundColor={"secondary"}
                        instructionType={"minecraftInstruction"}
                        onCloseInstructionHandler={onCloseInstructionButtonClick}
                    />
                </Broadcast>
                <HStack
                    justify={"between"}
                    className={cls.buttonWrapper}
                >
                    <Button
                        size={"medium"}
                        backgroundColor={"secondary"}
                        onClick={onConnectionButtonClick}
                    >
                        <Text
                            tag={"p"}
                            align={"center"}
                        >
                            Подключиться
                        </Text>
                    </Button>
                    <Button
                        size={"medium"}
                        backgroundColor={"main"}
                        onClick={onInstructionButtonClick}
                    >
                        <Text
                            tag={"p"}
                            align={"center"}
                        >
                            Инструкция
                        </Text>
                    </Button>
                </HStack>
            </VStack>

        </>
    );
};

export default MinecraftPage;