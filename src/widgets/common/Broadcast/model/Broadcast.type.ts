import {DecorativeFrameType} from "@/components/BroadcastFrame/model/BorderFrame.types";
import {TextAlign} from "@/components/Section/model/Section.types";
import {ReactNode} from "react";

export interface InstructionProps {
    onCloseInstructionButtonClick: () => void
}

export interface BroadcastProps {
    hTagText: string
    decorativeColors: [DecorativeFrameType, DecorativeFrameType, DecorativeFrameType]
    textAlign?: TextAlign
    internalContent?: ReactNode
    instructionIsShown?: boolean
    embeddedFrameSrc?: string
}