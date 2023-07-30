import {useEffect, useRef} from "react";
import {UseResizeWindowProps} from "@/hooks/hooks.types";


export const useResizeWindow = ({
	functionToExecute,
    dependencies = []
}: UseResizeWindowProps) => {

    const windowSize = useRef(0)

    useEffect(() => {

        const handleResize = () => {

            windowSize.current = window.innerWidth;
            functionToExecute();
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, [...dependencies]);
    return windowSize.current;
};