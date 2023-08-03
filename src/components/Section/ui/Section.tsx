import {FC} from "react";
import {SectionProps, TextAlign} from "@/components/Section/model/Section.types";
import {defineTextTag} from "@/components/Text/model/Text.helpers";
import cls from "./Section.module.scss";
import {combineClassnames} from "@/helpers/helpers";

const Section: FC<SectionProps> = ({
	children,
    hTag,
    hTagText,
    id,
    className = "",
    textAlign = "center"
}) => {

    const textAlignClass: Record<TextAlign, string> = {
        start: cls.textAlignStart,
        center: cls.textAlignCenter,
        end: cls.textAlignCenter
    };

    const sectionPaddingClass = hTagText ? cls.Section : "";

    const additionalClasses = [
        textAlignClass[textAlign],
        sectionPaddingClass
    ]

    return (
        <section
            id={id}
            className={combineClassnames(className, {}, additionalClasses)}
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