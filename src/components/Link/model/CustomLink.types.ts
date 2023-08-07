import {HTMLAttributes, ReactNode} from "react";

export interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement>{
    href: string
    children: ReactNode
    classname?: string
    onClick?: () => void
}