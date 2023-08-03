import {Section} from "@/components/Section";
import {HStack} from "@/components/Stack";
import {UserPhotoWidget} from "./PersonalAccountWidget/UserPhotoWidget";
import {PersonalInformation} from "@/widgets/common/PersonalAccount/ui/PersonalInformation/PersonalInformation";
import {PersonalAccountGoals} from "@/widgets/common/PersonalAccount/ui/PersonalAccountGoals/PersonalAccountGoals";

const PersonalAccount = () => {

    return (
        <Section
            id={"personal-account"}
            hTag={"h2"}
            hTagText={"Личный кабинет"}
            textAlign={"start"}
        >

            <HStack
                align={"start"}
            >
                <UserPhotoWidget
                    widgetType={"bigWidget"}
                />
                <PersonalInformation/>
                <PersonalAccountGoals/>
            </HStack>
        </Section>
    );

};

export {PersonalAccount};