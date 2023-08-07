import {DecorativeFrameType} from "@/components/BroadcastFrame/model/BorderFrame.types";
import {TextAlign} from "@/components/Section/model/Section.types";
import {HTMLAttributes, ReactNode} from "react";

export interface InstructionProps {
    onCloseInstructionButtonClick: () => void
}

export interface BroadcastProps extends HTMLAttributes<HTMLDivElement> {
    hTagText: string
    decorativeColors: [DecorativeFrameType, DecorativeFrameType, DecorativeFrameType]
    textAlign?: TextAlign
    instructionIsShown?: boolean
    embeddedFrameSrc?: string
}