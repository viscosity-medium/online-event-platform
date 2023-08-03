import {Section} from "@/components/Section";
import {Slider} from "@/widgets/common/Slider";

const Activities = () => {

    return (
        <Section
            hTag={"h2"}
            id={"activities"}
            hTagText={"Активности"}
        >
            <Slider
                dataInfoType={"activities"}
            />
        </Section>
    );

};

export { Activities };