import {NavigateOptions} from "next/dist/shared/lib/app-router-context";

export interface ButtonGroup {
    title: string,
    bgColor: "main" | "secondary"
    callback : () => void
}

export interface GalleryProps {
    buttonDownGroup: ButtonGroup[]
}

export interface GetContentProps {
    pathname: string
    dispatch: any
    goToAnotherPage:  (href: string, options?: (NavigateOptions | undefined)) => void
}

export type GetContent = ({pathname}: GetContentProps) => ({
    hTagText: string
    buttonGroup: ButtonGroup[],
})