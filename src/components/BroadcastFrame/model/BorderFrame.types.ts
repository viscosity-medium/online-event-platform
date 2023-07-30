import {ReactNode} from "react";

export type DecorativeFrameType = "outer" | "middle" | "inner" | "none";
export type EmbeddedFrameType = "iFrame" | "none";

export interface FrameProps {
    children?: ReactNode,
    className?: string
    decorativeFrameType?: DecorativeFrameType
    embeddedFrameType?: EmbeddedFrameType
    embeddedFrameSrc?: string
}