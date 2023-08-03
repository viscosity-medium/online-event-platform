'use client'

import {StaticInfo} from "@/widgets/common/PersonalAccount/ui/PersonalInformation/StaticInfo";
import {EditableInfo} from "@/widgets/common/PersonalAccount/ui/PersonalInformation/EditableInfo";
import {useSelector} from "react-redux";
import {getPersonalAccountMode} from "@/widgets/common/PersonalAccount/model/PersonalAccount.selectors";
import cls from "./PersonalInformation.module.scss"


const PersonalInformation = () => {

    const personalAccountMode = useSelector(getPersonalAccountMode);

    return (
        <div
            className={cls.personalInformation}
        >
            {
                personalAccountMode === "static" ? (
                    <StaticInfo/>
                ) : (
                    <EditableInfo/>
                )
            }
        </div>
    );

};

export {PersonalInformation};