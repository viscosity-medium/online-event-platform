'use client'

import {DecorativeBackground} from "@/components/DecorativeBackground";
import {Broadcast} from "@/widgets/common/Broadcast";
import {HStack, VStack} from "@/components/Stack";
import cls from "./page.module.scss"
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import {Instruction} from "@/widgets/common/Broadcast/ui/Instruction/Instruction";
import {useState} from "react";

const Page = () => {

    const [instructionIsShown, setInstructionIsShown] = useState<boolean>(false);

    const onConnectionButtonClick = () => {

    };
    const onInstructionButtonClick = () => {
        setInstructionIsShown(true);
    };

    const onCloseInstructionButtonClick = () => {
        setInstructionIsShown(false);
    }

    return (
        <>
            <DecorativeBackground
                stripeLeft={"christmasTreeToys"}
                stripeRight={"christmasMagicThings"}
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
                    internalContent={(
                        <Instruction
                            onCloseInstructionButtonClick={onCloseInstructionButtonClick}
                        />
                    )}
                />
                <HStack
                    justify={"between"}
                    className={cls.buttonWrapper}
                >
                    <Button
                        size={"standard"}
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
                        size={"standard"}
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

export default Page;