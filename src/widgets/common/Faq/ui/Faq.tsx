import {Section} from "@/components/Section";
import {faqData} from "@/widgets/common/Faq/model/Faq.data";
import {DropDownMenu} from "@/components/DropDownMenu";

const Faq = () => {

    return (
        <Section
            hTag={"h2"}
            id={"faq"}
            hTagText={"FAQ"}
        >
            <DropDownMenu
                dropdownData={faqData}
            />
        </Section>
    );

};

export { Faq };