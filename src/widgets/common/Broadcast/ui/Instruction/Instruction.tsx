import {Window} from "@/components/Window";
import {Text} from "@/components/Text";
import {VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import cls from "./Instruction.module.scss"
import {instructionData} from "@/widgets/common/Broadcast/model/Instruction.data";
import {FC} from "react";
import {InstructionProps} from "@/widgets/common/Broadcast/model/Broadcast.type";

const Instruction: FC<InstructionProps> = ({
    onCloseInstructionButtonClick
}) => {
    return (
        <Window
            classname={cls.instructionWrapper}
        >
            <Text
                tag={"h3"}
                color={"lightBlue"}
            >
                ИНСТРУКЦИЯ
                КАК ЗАЙТИ НА СЕРВЕР ДЛЯ ИГРЫ В МАЙНКРАФТ
            </Text>
            <VStack
                className={cls.descriptionWrapper}
            >
                {
                    instructionData.map((textContent)=>{
                        return(
                            <Text
                                tag={"p"}
                                color={"lightBlue"}
                                className={cls.description}
                                align={"left"}
                            >
                                {
                                    textContent
                                }
                            </Text>
                        )
                    })
                }
            </VStack>
            <Button
                size={"standard"}
                backgroundColor={"secondary"}
                onClick={onCloseInstructionButtonClick}
            >
                <Text
                    tag={"p"}
                    align={"center"}
                >
                    Ок
                </Text>
            </Button>
        </Window>
    );
};

export {Instruction};