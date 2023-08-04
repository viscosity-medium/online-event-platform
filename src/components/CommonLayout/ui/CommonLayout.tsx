import {FC} from 'react';
import {CommonLayoutProps} from "../model/CommonLayout.types";
import cls from "./CommonLayout.module.scss"
import {AppHeader} from "@/widgets/common/AppHeader";
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