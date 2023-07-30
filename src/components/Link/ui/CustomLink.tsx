import Link from "next/link";
import {FC} from "react";
import {CustomLinkProps} from "@/components/Link/model/CustomLink.types";

const CustomLink: FC<CustomLinkProps> = ({href, children}) => {
    return (
        <Link
            href={href}
        >
            {
                children
            }
        </Link>
    );
};

export { CustomLink };