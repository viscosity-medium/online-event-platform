import {HStack, VStack} from "@/components/Stack";
import {Image} from "@/components/Image";
import Promo_ru from "@/assets/common/happy_new_year_ru.svg";
import {Section} from "@/components/Section";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import cls from "./promo.module.scss";

const Promo = () => {
    return (
        <Section
            id={"promo"}
        	className={cls.promoSection}
        >
            <VStack>
                <Image
                    src={Promo_ru}
                    position={"absolute"}
                    objectFit={"contain"}
                    className={cls.promoImage}
                    alt={"Happy New Year (Russian Language)"}
                />
                <VStack className={cls.contentGroup}>
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