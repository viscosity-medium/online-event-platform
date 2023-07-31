import {HTMLProps, ReactNode, RefObject} from "react";

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

export interface StackProps extends HTMLProps<HTMLDivElement> {
    reference?: RefObject<HTMLDivElement>
    className?: string
    children?: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    backgroundColor?: string
}

export type StackPropsOmitted = Omit<StackProps, 'direction'>;