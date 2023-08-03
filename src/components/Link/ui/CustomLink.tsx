import Link from "next/link";
import {FC} from "react";
import {CustomLinkProps} from "@/components/Link/model/CustomLink.types";
import cls from "./CustomLink.module.scss";

const CustomLink: FC<CustomLinkProps> = ({
    href,
    children,
    classname,
    onClick
}) => {
    return (
        <Link
            href={href}
            className={`${cls.link} ${classname}`}
            onClick={onClick}
        >
            {
                children
            }
        </Link>
    );
};

export { CustomLink };