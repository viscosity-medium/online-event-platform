import {StaticImport} from "next/dist/shared/lib/get-img-props";

export type ImagePosition = "absolute" | "relative";
export type ImageObjectFit = "cover" | "contain";

export type PositionClasses = Record<ImagePosition, string>;
export type ObjectFitClasses = Record<ImageObjectFit, string>

export interface NextImageProps {
    src: string | StaticImport
    alt: string
    width?: number
    height?: number
    className?: string
    position?: ImagePosition
    objectFit?: ImageObjectFit
}