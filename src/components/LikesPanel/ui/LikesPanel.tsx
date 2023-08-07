'use client'

import {HStack} from "@/components/Stack";
import Heart from "@/assets/common/gallery/heart.svg"
import cls from "./LikesPanel.module.scss";
import {Text} from "@/components/Text";
import {useEffect, useRef, useState} from "react";
import {useHover} from "@/hooks/hooks";

export type HeartState = "transparent" | "white" | "red";

const LikesPanel = () => {

    const [heartState, setColorState] = useState<HeartState>("transparent");
    const wrapperRef = useRef<HTMLDivElement>(null);

    const callbackOnEnter = () => {setColorState("red")};
    const callbackOnLeave = () => {setColorState("transparent")};

    const isHovered = useHover({
        reference: wrapperRef,
        callbackOnEnter,
        callbackOnLeave,
    });

    console.log(isHovered);


    return (
        <HStack
            className={`${cls.likesPanel}`}
            reference={wrapperRef}
            onClick={()=>{
                console.log(wrapperRef.current)
            }}
        >
            <Heart
                className={`${cls.heart} ${cls[heartState]}`}
            />
            &nbsp;
            <Text
                tag={"p"}
                className={cls.likesCounter}
            >
                12
            </Text>
        </HStack>
    );

};

export {LikesPanel};