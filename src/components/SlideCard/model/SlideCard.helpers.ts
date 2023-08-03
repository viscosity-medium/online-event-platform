import {SlidersData} from "@/widgets/common/Slider/model/Sliders.types";

export interface OnButtonClickHandler {
    cardType: keyof SlidersData
    buttonText: string,
    giftPrice?: number,
    userGoals?: number,
    buttonTextAlt?: string,
}

export type DefineButtonText = (props: OnButtonClickHandler) => {
    definedButtonText: string | undefined,
    extraButtonClass: "none" | "unavailableCard"
}

export const defineButtonText: DefineButtonText = ({
    cardType,
    userGoals,
    giftPrice,
    buttonText,
    buttonTextAlt,
}) => {

    if(cardType === "activities"){

        return {
            definedButtonText: buttonText,
            extraButtonClass: "none"
        };

    } else if(cardType === "giftsShop"){

        if(userGoals && giftPrice && userGoals > giftPrice){

            return {
                definedButtonText: buttonText,
                extraButtonClass: "none"
            };

        } else {

            return {
                definedButtonText: buttonTextAlt,
                extraButtonClass: "unavailableCard"
            };

        }

    } else {
        return {
            definedButtonText: "",
            extraButtonClass: "none"
        }
    }

};