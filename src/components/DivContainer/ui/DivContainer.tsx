import {ExtendedCSSProperties, StyledDivContainer} from "@/components/DivContainer/ui/DivContainer.styled";
import {FC} from "react";

const DivContainer: FC<ExtendedCSSProperties> = ({
    children
}) => {

    return (
        <StyledDivContainer
            // height={""}
            // beforeHeight={"150px"}
        >
            {/*{*/}
            {/*    children*/}
            {/*}*/}
        </StyledDivContainer>
    );

};

export {DivContainer};