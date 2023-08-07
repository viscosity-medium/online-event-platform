import {Flex} from "./Flex";
import {StackPropsOmitted} from "../model/Stack.types";

const HStack = (props: StackPropsOmitted) => (

    <Flex
        reference={props.reference}
        ref={props.ref}
        direction="row"
        {...props}
    />

);

export { HStack };
