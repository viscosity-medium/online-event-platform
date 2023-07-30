import {Flex} from "./Flex";
import {StackPropsOmitted} from "../model/Stack.types";

const HStack = (props: StackPropsOmitted) => (

    <Flex
        {...props}
        direction="row"
    />

);

export { HStack };
