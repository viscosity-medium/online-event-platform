import {Checkbox} from "@/components/Checkbox/ui/Checkbox";
import cls from "./PersonalAccountGoals.module.scss";
import {FC} from "react";

interface PersonalAccountGoalsItem {
    checkboxText: string
    isChecked: boolean
}

const PersonalAccountGoalsItem: FC<PersonalAccountGoalsItem> = ({
    checkboxText,
    isChecked
}) => {

    return (
        <Checkbox
            checkboxText={checkboxText}
            isDefaultChecked={isChecked}
            className={cls.personalAccountGoalsItem}
        />
    );

};

export {PersonalAccountGoalsItem};