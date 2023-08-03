"use client"

import { FC } from "react";
import { ProvidersProps } from "@/providers/model/providers.types";
import {Provider} from "react-redux"
import {store} from "@/store/store";

const MasterProvider: FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider
            store={store}
        >
            {children}
        </Provider>
    );
};

export { MasterProvider };