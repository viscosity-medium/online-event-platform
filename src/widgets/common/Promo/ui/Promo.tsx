import {HStack, VStack} from "@/components/Stack";
import Promo_ru from "@/assets/common/promo-decor.svg";
import PromoOrnament from "@/assets/common/promo-ornament.svg";
import {Section} from "@/components/Section";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import cls from "./promo.module.scss";
import {useEffect, useRef, useState} from "react";
import {PromoDecorations} from "@/widgets/common/Promo/ui/PromoDecorations";
import {useResizeWindow} from "@/hooks/hooks";

export interface PromoResolution {
    width: number | undefined,
    height: number | undefined
}

const Promo = () => {

    const promoImageRef = useRef<SVGSVGElement>(null);
    const [promoResolution,setPromoResolution] = useState<PromoResolution>({
        width: undefined,
        height: undefined
    });

    useResizeWindow({callback: ()=> {

        if(promoImageRef.current){
            setPromoResolution(prevState => ({
                width: promoImageRef.current!.clientWidth,
                height: promoImageRef.current!.clientHeight
            }))
        }

    },});

    const style = promoResolution.height ? {
        width: "100%",
        height: promoResolution.height
    } : {
        width: "100%",
        height: "56.1vw"
    };


    return (
        <Section
            id={"promo"}
        	className={cls.promoSection}
            style={style}
        >
            <VStack>
                <PromoDecorations
                    reference={promoImageRef}
                    className={cls.promoImage}
                />
                <PromoOrnament
                    className={cls.promoOrnament}
                />
                <VStack
                    className={cls.contentGroup}
                >
                    <Text
                        tag={"h1"}
                        align={"left"}
                        className={cls.h1}
                    >
                        ИТ-магия
                    </Text>
                    <HStack
                        className={cls.buttonGroup}
                        justify={"between"}
                    >
                        <Button
                        	size={"standard"}
                            backgroundColor={"main"}
                        >
                            <Text
                                tag={"p"}
                                align={"center"}
                            >
                                Адвент-календарь
                            </Text>
                        </Button>
                        <Button
                            size={"standard"}
                            backgroundColor={"secondary"}
                        >
                            <Text
                                tag={"p"}
                                align={"center"}
                            >
                                Результаты Quiz
                            </Text>
                        </Button>
                    </HStack>
                </VStack>

            </VStack>
        </Section>
    );
};

export { Promo };