import {Section} from "@/components/Section";
import {Slider} from "@/widgets/common/Slider";

const Gifts = () => {

    return (
        <Section
            hTag={"h2"}
            id={"gifts-shop"}
            hTagText={"Магазин подарков"}
        >
            <Slider
                dataInfoType={"giftsShop"}
            />
        </Section>
    );

};

export { Gifts };