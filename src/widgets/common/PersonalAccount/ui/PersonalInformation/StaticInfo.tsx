'use client';

import {HStack, VStack} from "@/components/Stack";
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {Image} from "@/components/Image";
import ArrowRight from "@/assets/common/personal-account/arrow-right.svg";
import cls from "./StaticInfo.module.scss"
import {useSelector} from "react-redux";
import {getUserPersonalInfo} from "@/widgets/common/PersonalAccount/model/PersonalAccount.selectors";
import {UserPersonalInfo} from "@/widgets/common/PersonalAccount/model/PersonalAccount.type";
import {useAppDispatch, useTypedSelector} from "@/store/store";
import {personalAccountActions} from "@/widgets/common/PersonalAccount/model/PersonalAccount.slice";
import {personalAccountData} from "@/widgets/common/PersonalAccount/model/PersonalAccount.data";

const StaticInfo = () => {

    const dispatch = useAppDispatch();
    const userPersonalInfo = useTypedSelector(getUserPersonalInfo);

    return (
        <VStack>
            {
                Object.entries(userPersonalInfo).map(([key, value], index) => {
                    return (
                        <VStack
                            key={`${key}__${index}`}
                            className={cls.textWrapper}
                        >
                            <Text
                                tag={"p"}
                                className={cls.personalInfoItem}
                            >
                                {
                                    value || personalAccountData[key as keyof  UserPersonalInfo]
                                }
                            </Text>
                            <hr className={cls.underscoreLine}/>
                        </VStack>
                    );
                })
            }
            <Button
                size={"none"}
                borderColor={"none"}
                className={cls.editButton}
                onClick={()=>{
                    dispatch(personalAccountActions.setPersonalAccountMode("editable"));
                }}
            >
                <HStack>
                    <Text
                        tag={"p"}
                        className={cls.editButtonText}
                    >
                        Отредактировать
                    </Text>
                    <Image
                        src={ArrowRight}
                        alt={"arrow-right.svg"}
                    />
                </HStack>
            </Button>
        </VStack>
    );

};

export {StaticInfo};