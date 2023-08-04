import {FC} from 'react';
import {Section} from "@/components/Section";
import {BroadcastFrame} from "@/components/BroadcastFrame/ui/BroadcastFrame";
import {BroadcastProps} from "@/widgets/common/Broadcast/model/Broadcast.type";

const Broadcast: FC<BroadcastProps> = ({
	hTagText,
	decorativeColors,
    textAlign = "center",
    internalContent,
    instructionIsShown,
    embeddedFrameSrc
}) => {
    return (
        <Section
        	hTag={"h2"}
            id={"broadcast"}
            hTagText={hTagText}
            textAlign={textAlign}
        >
		<BroadcastFrame
            decorativeFrameType={decorativeColors[0]}
        >
            <BroadcastFrame
            	decorativeFrameType={decorativeColors[1]}
            >
                <BroadcastFrame
                	decorativeFrameType={decorativeColors[2]}
                >
                    <BroadcastFrame
                        embeddedFrameType={"iFrame"}
                        embeddedFrameSrc={embeddedFrameSrc}
                    >
                        {
                            instructionIsShown && internalContent
                        }
                    </BroadcastFrame>
                </BroadcastFrame>
            </BroadcastFrame>
        </BroadcastFrame>
        </Section>
    );
};

export { Broadcast };