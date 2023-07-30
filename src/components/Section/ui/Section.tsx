import {FC} from "react";
import {SectionProps} from "@/components/Section/model/Section.types";
import {defineTextTag} from "@/components/Text/model/Text.helpers";
import cls from "./Section.module.scss";
import {combineClassnames} from "@/helpers/helpers";

const Section: FC<SectionProps> = ({
	children,
    hTag,
    hTagText,
    className = ""
}) => {
    return (
        <section
            className={combineClassnames(className, {}, [cls.Section])}
        >
            {
                hTag && defineTextTag({
                    tag: hTag,
                    cls: cls.hTag,
                	children: hTagText
                })}
            {children}
        </section>
    );
};

export { Section };