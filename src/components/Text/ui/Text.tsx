import {FC, memo} from 'react';
import cls from './text.module.scss';
import {TextProps} from "@/components/Text/model/Text.types";
import {combineClassnames} from "@/helpers/helpers";
import {defineTextTag} from "@/components/Text/model/Text.helpers";


const Text: FC<TextProps> = memo(({
    className,
    tag,
	children,
    reference,
    theme = "primary",
    align = "left",
    size = "medium",
    color = "white"
}) => {

    return (
        <div
            ref={reference}
            className={combineClassnames(
            cls.text,
            {},
            [
                className,
                cls[theme],
                cls[align],
                cls[size],
                cls[color]
            ],
        )}
        >
            {
                defineTextTag({
                    tag,
                    children: children,
                    cls: cls.text
                })
            }
        </div>
    );
});

export { Text };
