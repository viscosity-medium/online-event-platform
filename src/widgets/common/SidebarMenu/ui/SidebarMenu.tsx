'use client'

import cls from "./SidebarMenu.module.scss";
import {HStack, VStack} from "@/components/Stack";
import {Link} from "@/components/Link";
import {sidebarMenuData} from "@/widgets/common/SidebarMenu/model/SidebarMenu.data";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import {Image} from "@/components/Image";
import RedCross from "@/assets/common/menu/cross.svg";
import {useSelector} from "react-redux";
import {getMenuIsOpen} from "@/widgets/common/SidebarMenu/model/SidebarMenu.selectors";
import {useAppDispatch} from "@/store/store";
import {onButtonClick} from "@/widgets/common/SidebarMenu/model/SidebarMenu.helpers";

const SidebarMenu = () => {

    const dispatch = useAppDispatch();
    const menuIsOpen = useSelector(getMenuIsOpen);

    return (
        <aside className={`${!menuIsOpen && cls.menuIsClosed} ${cls.sidebarMenu}`}>
            <Button
                color={"none"}
                borderColor={"none"}
                className={cls.closeBtn}
                onClick={() => {
                    onButtonClick({
                        dispatch
                    });
                }}
            >
                <HStack
                    align={"center"}
                >
                    <Image
                        src={RedCross}
                        alt={"close-cross-button.svg"}
                        className={cls.closeCross}
                    />
                    <Text
                        tag={"p"}
                        className={cls.closeText}
                    >
                        Закрыть меню
                    </Text>
                </HStack>
            </Button>
            <VStack>
                {
                    sidebarMenuData.map((sidebarMenuItem, index) => (
                        <Link
                            key={`${sidebarMenuItem.name}__menu__${index}`}
                            href={sidebarMenuItem.link}
                            classname={cls.link}
                            onClick={() => {
                                onButtonClick({
                                    dispatch
                                });
                            }}
                        >
                            {sidebarMenuItem.name}
                        </Link>
                    ))
                }
            </VStack>
        </aside>
    );

};

export {SidebarMenu};