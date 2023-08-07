import {FC, useRef} from 'react';
import {CommonLayoutProps} from "../model/CommonLayout.types";
import cls from "./CommonLayout.module.scss"
import {AppHeader} from "@/widgets/common/AppHeader";
import {SidebarMenu} from "@/widgets/common/SidebarMenu/ui/SidebarMenu";
import {Modal} from "@/components/Modal";

const CommonLayout: FC<CommonLayoutProps> = ({children}) => {

    return (
        <>
            <AppHeader/>
            <main
                className={cls.main}>
                {
                    children
                }
                <div
                    id={"portal"}
                    className={cls.portal}
                />
            </main>
            <SidebarMenu/>
        </>

    );

};

export { CommonLayout };