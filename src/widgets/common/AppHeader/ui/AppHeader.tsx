import {HStack} from "@/components/Stack";
import {FC} from "react";
import {AppHeaderProps} from "@/widgets/common/AppHeader/model/AppHeader.types";
import {Image} from "@/components/Image";
import Logo from "@/assets/common/logo.svg"
import {Link} from "@/components/Link";
import cls from "./AppHeader.module.scss";

const AppHeader: FC<AppHeaderProps> = ({children}) => {

    return (
        <header className={cls.AppHeader}>
            <HStack>
                <Link
                    href={"/"}
                >
                    <Image
                        src={Logo}
                        alt={"logo"}
                    />
                </Link>
                {
                    children
                }
            </HStack>
        </header>
    );

};

export { AppHeader };