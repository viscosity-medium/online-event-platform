import {RefObject, useEffect, useRef, useState} from "react";
import {UseResizeWindowProps} from "@/hooks/hooks.types";

export const useResizeWindow = ({
	functionToExecute,
    dependencies = []
}: UseResizeWindowProps) => {

    const windowSize = useRef<number>(0)

    useEffect(() => {

        const handleResize = () => {

            windowSize.current = window.innerWidth;
            functionToExecute();

        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, [...dependencies]);

    return windowSize.current;

};

export const useHover = ({
    reference,
    callbackOnEnter = () => {},
    callbackOnLeave = () => {},
}: {
    reference: RefObject<HTMLDivElement>,
    callbackOnEnter?: () => void
    callbackOnLeave?: () => void
}) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onEnterCallback = () => {
        setIsHovered(true);
        callbackOnEnter();
    };
    const onLeaveCallback = () => {
        setIsHovered(false);
        callbackOnLeave();
    };

    useEffect(() => {
        if(!reference.current){
            return
        }

        reference.current?.addEventListener("mouseenter", onEnterCallback);
        reference.current?.addEventListener("mouseleave", onLeaveCallback);

        return() => {
            reference.current?.removeEventListener("mouseenter", onEnterCallback);
            reference.current?.removeEventListener("mouseleave", onLeaveCallback);
        }

    }, []);

    return isHovered

}