import {Text} from "@/components/Text";
import {VStack} from "@/components/Stack";
import {instructionsData} from "@/components/Instruction/model/InstructionsData";
import {Button} from "@/components/Button";
import {Window} from "@/components/Window";
import {FC, HTMLAttributes} from "react";
import cls from "./Instruction.module.scss"
import {FlexAlign} from "@/components/Stack/model/Stack.types";
import {TextAlign} from "@/components/Text/model/Text.types";
import {ButtonColor, ButtonSize} from "@/components/Button/model/Button.types";

export type InstructionType = "minecraftInstruction" | "galleryInstruction"

export interface InstructionProps extends HTMLAttributes<HTMLDivElement>{
    instructionType: InstructionType
    onCloseInstructionHandler: any
    buttonBackgroundColor?: ButtonColor
    buttonSize?: ButtonSize
    alignDescription?: FlexAlign
    textAlign?: TextAlign
}

const Instruction: FC<InstructionProps> = ({
    instructionType,
    onCloseInstructionHandler,
    className,
    alignDescription,
    textAlign,
    buttonBackgroundColor = "main",
    buttonSize = "standard"
}) => {

    const instructionDataItem = instructionsData[instructionType]

    const extraClass: Record<InstructionType, string> =  {
        galleryInstruction: cls.galleryInstruction,
        minecraftInstruction: cls.minecraftInstruction
    }

    return (
        <Window
            classname={`${className} ${extraClass[instructionType]}`}
        >
            <Text
                tag={"h3"}
                color={"lightBlue"}
                align={"center"}
                className={cls.instructionTitle}
            >
                {
                    instructionDataItem.title
                }
            </Text>
            <VStack
                className={cls.descriptionWrapper}
                align={alignDescription}
            >
                {
                    instructionDataItem.description.map((textContent, index) => {
                        return(
                            <Text
                                key={`${index}__${textContent}`}
                                tag={"p"}
                                color={"lightBlue"}
                                className={cls.description}
                                align={textAlign}
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
                size={buttonSize}
                backgroundColor={buttonBackgroundColor}
                onClick={onCloseInstructionHandler}
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