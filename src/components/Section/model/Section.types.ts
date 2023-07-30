import {ReactNode} from "react";
import {HTag } from "@/components/Text/model/Text.types";


export interface SectionProps {
    children?: ReactNode,
    hTag?: HTag
    hTagText?: string
    className?: string
}