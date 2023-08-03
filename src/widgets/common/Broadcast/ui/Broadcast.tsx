import {FC} from 'react';
import {Section} from "@/components/Section";
import {BroadcastFrame} from "@/components/BroadcastFrame/ui/BroadcastFrame";
import {DecorativeFrameType} from "@/components/BroadcastFrame/model/BorderFrame.types";

interface BroadcastProps {
    hTagText: string
    decorativeColors: [DecorativeFrameType, DecorativeFrameType, DecorativeFrameType]
}

const Broadcast: FC<BroadcastProps> = ({
	hTagText,
	decorativeColors
}) => {
    return (
        <Section
        	hTag={"h2"}
            id={"broadcast"}
            hTagText={hTagText}
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
                        embeddedFrameSrc={"https://www.youtube.com/embed/doO5R2xZMFI"}
                    />
                </BroadcastFrame>
            </BroadcastFrame>
        </BroadcastFrame>
        </Section>
    );
};

export { Broadcast };