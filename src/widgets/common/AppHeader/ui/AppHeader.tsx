'use client'

import {HStack} from "@/components/Stack";
import {FC} from "react";
import {AppHeaderProps} from "@/widgets/common/AppHeader/model/AppHeader.types";
import Logo from "@/assets/common/logo.svg"
import {Link} from "@/components/Link";
import cls from "./AppHeader.module.scss";
import {PersonalAccountWidget} from "@/widgets/common/PersonalAccount";
import {usePathname} from "next/navigation";

const AppHeader: FC<AppHeaderProps> = ({children}) => {

    const pathname = usePathname()

    const headerPosition =  ["/", "/minecraft"].includes(pathname) ? cls.positionAbsolute : cls.positionRelative;

    return (
        <header className={`${cls.AppHeader} ${headerPosition}`}>
            <HStack
                justify={"between"}
            >
                <Link
                    href={"/"}
                >
                    <Logo/>
                </Link>
                {
                    children
                }
                <PersonalAccountWidget/>
            </HStack>
        </header>
    );

};

export { AppHeader };