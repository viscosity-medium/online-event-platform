import {VStack} from "@/components/Stack";
import cls from "./Window.module.scss";
import {FC} from "react";
import {WindowProps} from "@/components/Window/model/Window.type";

const Window: FC<WindowProps> = ({children}) => {
    return (
        <VStack className={cls.window}>
            {
                children
            }
        </VStack>
    );
};

export {Window};