import {FC} from 'react';
import {CommonLayoutProps} from "../model/CommonLayout.types";
import cls from "./CommonLayout.module.scss"
import {VStack} from "@/components/Stack";
import {Button} from "@/components/Button";
import {AppHeader} from "@/widgets/common/AppHeader";
import {Text} from "@/components/Text";
import {SidebarMenu} from "@/widgets/common/SidebarMenu/ui/SidebarMenu";

const CommonLayout: FC<CommonLayoutProps> = ({children}) => {

    return (
        <>
            <AppHeader/>
            <main className={cls.main}>
                {
                    children
                }
            </main>
            <SidebarMenu/>
        </>

    );

};

export { CommonLayout };