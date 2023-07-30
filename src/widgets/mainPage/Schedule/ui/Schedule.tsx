import {Section} from "@/components/Section";
import {DropDownMenu} from "../../../../components/DropDownMenu";

const Schedule = () => {
    return (
        <Section
            hTag={"h2"}
            hTagText={"Программа"}
        >
            <DropDownMenu/>

        </Section>
    );
};

export { Schedule };