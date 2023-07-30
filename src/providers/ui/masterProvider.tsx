import { FC } from "react";
import { ProvidersProps } from "@/providers/model/providers.types";

const MasterProvider: FC<ProvidersProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export { MasterProvider };