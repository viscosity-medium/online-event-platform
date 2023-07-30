import styled from "styled-components";
import {CSSProperties, ReactNode} from "react";
import type * as CSS from 'csstype';

export interface ExtendedCSSProperties extends CSSProperties{
    beforeHeight?:  string | number | undefined
    className?: string
    style?: CSSProperties
    children?: ReactNode
}


const StyledDivContainer = styled.div<ExtendedCSSProperties>`{
    height: ${props => props.height}
    //
    // "&:before": {
    //     content: "";
    //     ${props => props.beforeHeight}
    // }//
}`;

export {StyledDivContainer};