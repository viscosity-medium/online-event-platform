'use client'

import {HStack, VStack} from "@/components/Stack";
import {UserPhotoWidget} from "@/widgets/common/PersonalAccount/ui/PersonalAccountWidget/UserPhotoWidget";
import {Text} from "@/components/Text";
import cls from "./PersonalAccountWidget.module.scss";
import {Button} from "@/components/Button";
import BurgerMenuIcon from "@/assets/common/menu/burger-menu-icon.svg"
import {Image} from "@/components/Image";
import {onButtonClick} from "@/widgets/common/SidebarMenu/model/SidebarMenu.helpers";
import {useAppDispatch} from "@/store/store";
import Link from "next/link";
import {useRef} from "react";

const PersonalAccountWidget = () => {

    const dispatch = useAppDispatch();
    const linkRef = useRef<HTMLAnchorElement>(null)

    return (
        <HStack
            className={cls.PersonalAccountWidget}
        >
            <VStack
                align={"end"}
            >
                <Text
                    tag={"p"}
                    className={cls.username}
                >
                    Мария Иванова
                </Text>
                <hr
                    className={cls.divider}
                />
                <Text
                    tag={"p"}
                    className={cls.personalGoals}
                >
                    456 баллов
                </Text>
            </VStack>
            <Button
                size={"none"}
                borderColor={"none"}
                onClick={()=>{
                    linkRef.current?.click()
                }}
            >
                <UserPhotoWidget
                    widgetType={"smallWidget"}
                />
                <Link
                    ref={linkRef}
                    href={"/personal-account"}
                />
            </Button>
            <Button
                color={"none"}
                borderColor={"none"}
                className={cls.burgerButton}
                onClick={() => {
                    onButtonClick({
                        dispatch
                    });
                }}
            >
                <Image
                    src={BurgerMenuIcon}
                    alt={"burger-menu-icon.svg"}
                />
            </Button>
        </HStack>
    );
};

export {PersonalAccountWidget};