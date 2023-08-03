"use client"

import {VStack} from "@/components/Stack";
import {PersonalAccountGoalsItem} from "@/widgets/common/PersonalAccount/ui/PersonalAccountGoals/PersonalAccountGoalsItem";
import cls from "./PersonalAccountGoals.module.scss";
import {useSelector} from "react-redux";
import {getUserPersonalGoals} from "@/widgets/common/PersonalAccount/model/PersonalAccount.selectors";
import {UserPersonalGoals} from "@/widgets/common/PersonalAccount/model/PersonalAccount.type";
import {personalAccountGoalsData} from "@/widgets/common/PersonalAccount/model/PersonalAccount.data";

const PersonalAccountGoals = () => {

    const userPersonalGoals = useSelector(getUserPersonalGoals);

    return (
        <VStack
            className={cls.personalAccountGoalsWrapper}
        >
            {
                Object.entries(personalAccountGoalsData).map(([key, checkboxText], index)=>{
                    return(
                        <PersonalAccountGoalsItem
                            key={`${index}_${checkboxText}`}
                            checkboxText={checkboxText}
                            isChecked={userPersonalGoals[key as keyof UserPersonalGoals]}
                        />
                    )
                })
            }
        </VStack>
    );

};

export {PersonalAccountGoals};