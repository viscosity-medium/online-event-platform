import {Flex} from "./Flex";
import {StackPropsOmitted} from "../model/Stack.types";

const VStack = (props: StackPropsOmitted) => {

    const { align = 'start' } = props;

    return (
        <Flex
            reference={props.reference}
            {...props}
            direction="column"
            align={align}
        />
    );

};

export { VStack };