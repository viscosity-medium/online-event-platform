import {FC} from 'react';
import {HStack} from "@/components/Stack";
import cls from "./BroadcastFrame.module.scss";
import {combineClassnames} from "@/helpers/helpers";
import {DecorativeFrameType, EmbeddedFrameType, FrameProps} from "@/components/BroadcastFrame/model/BorderFrame.types";

const BroadcastFrame: FC<FrameProps> = ({
   	children,
	className = "",
    decorativeFrameType = "none",
    embeddedFrameType = "none",
	embeddedFrameSrc = ""
}) => {

    const decorativeFrameTypeClasses: Record<DecorativeFrameType, string> = {
        outer: `${cls.decorativeFrame} ${cls.decorativeFrameOuter}`,
        middle: `${cls.decorativeFrame} ${cls.decorativeFrameMiddle}`,
        inner: `${cls.decorativeFrame} ${cls.decorativeFrameInner}`,
        none: ``
    };

    const embeddedFrameTypeClasses: Record<EmbeddedFrameType, string> = {
        iFrame: `${cls.iFrameOuter}`,
        none: ``
    };

    const classes = [
        decorativeFrameTypeClasses[decorativeFrameType],
        embeddedFrameTypeClasses[embeddedFrameType]
    ];

    return (
        <HStack
            className={combineClassnames(className,{}, classes)}
            justify={"center"}
        >
            {
                decorativeFrameType !== "none" &&
                children
            }
            {
                embeddedFrameType !== "none" &&
                <>
                    <iframe
                        src={embeddedFrameSrc}
                        className={cls.iFrameInner}
                    />
                    {
                        children
                    }
                </>
            }
        </HStack>
    );
};

export { BroadcastFrame };