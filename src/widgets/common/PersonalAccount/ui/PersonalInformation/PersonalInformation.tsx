'use client'

import {StaticInfo} from "@/widgets/common/PersonalAccount/ui/PersonalInformation/StaticInfo";
import {EditableInfo} from "@/widgets/common/PersonalAccount/ui/PersonalInformation/EditableInfo";
import {useSelector} from "react-redux";
import {getPersonalAccountMode} from "@/widgets/common/PersonalAccount/model/PersonalAccount.selectors";
import cls from "./PersonalInformation.module.scss"
import {useTypedSelector} from "@/store/store";


const PersonalInformation = () => {

    const personalAccountMode = useTypedSelector(getPersonalAccountMode);

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