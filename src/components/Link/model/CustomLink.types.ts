import {ReactNode} from "react";

export interface CustomLinkProps {
    href: string
    children: ReactNode
    classname?: string
    onClick?: () => void
}