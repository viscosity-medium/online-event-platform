export interface SlideCardProps {
    cardTitle: string
    cardDescription: string
    imageSource: string
    imageAltDescription: string
}

export interface SlideCardExtendedProps extends SlideCardProps{
    price: number
}