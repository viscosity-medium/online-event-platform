import {ReactNode} from "react";

export type StripeContent = "none" | "christmasTreeToys1" | "christmasTreeToys2" | "christmasMagicThings" ;
export type Background = "none" | "withoutStick" | "withStick";

export interface GetDecorativeBackgroundContent {
    stripeLeft: StripeContent
    stripeRight: StripeContent
    background: Background
}
