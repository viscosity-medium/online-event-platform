import {HTMLAttributes, ReactNode} from "react";
import {HTag } from "@/components/Text/model/Text.types";


export type TextAlign = "start" | "center" | "end"

export interface SectionProps extends HTMLAttributes<HTMLElement>{
    children?: ReactNode,
    hTag?: HTag
    hTagText?: string
    id: string
    className?: string
    textAlign?: TextAlign
}