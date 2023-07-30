'use client'
import { FC } from "react";
import { ProvidersProps } from "@/providers/model/providers.types";
import {CommonLayout} from "@/components/CommonLayout";

const CustomChakraProvider: FC<ProvidersProps> = ({ children }) => {
    return (
        <>
        </>
        <CacheProvider>
            <ChakraProvider>
                {children}
        	</ChakraProvider>
        </CacheProvider>
    );
};

export default CustomChakraProvider;