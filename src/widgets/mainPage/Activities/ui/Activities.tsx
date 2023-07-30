import {Section} from "@/components/Section";
import {SlideCard} from "@/components/SlideCard/ui/SlideCard";
import {Slider} from "@/widgets/common/Slider";

const Activities = () => {
    return (
        <Section
            hTag={"h2"}
            hTagText={"Активности"}
        >
            <Slider
                dataInfo={"activities"}
            />
        </Section>
    );
};

export { Activities };