import {VStack} from "@/components/Stack";
import cls from "./Window.module.scss";
import {FC} from "react";
import {WindowProps} from "@/components/Window/model/Window.type";

const Window: FC<WindowProps> = ({
    children,
    classname
}) => {
    return (
        <VStack
            className={
                `${classname} ${cls.window}`
            }
            align={"center"}
        >
            {
                children
            }
        </VStack>
    );
};

export {Window};