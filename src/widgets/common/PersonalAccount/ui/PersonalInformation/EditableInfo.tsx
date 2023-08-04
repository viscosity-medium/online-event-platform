import {HStack, VStack} from "@/components/Stack";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";
import {Text} from "@/components/Text";
import ArrowRight from "@/assets/common/personal-account/arrow-right.svg"
import {Image} from "@/components/Image";
import cls from "./EditableInfo.module.scss"
import {useSelector} from "react-redux";
import {getUserPersonalInfo} from "@/widgets/common/PersonalAccount/model/PersonalAccount.selectors";
import {personalAccountActions} from "@/widgets/common/PersonalAccount/model/PersonalAccount.slice";
import {useAppDispatch, useTypedSelector} from "@/store/store";
import {UserPersonalInfo} from "@/widgets/common/PersonalAccount/model/PersonalAccount.type";
import {personalAccountData} from "@/widgets/common/PersonalAccount/model/PersonalAccount.data";

const EditableInfo = () => {

    const dispatch = useAppDispatch();
    const userPersonalInfo = useTypedSelector(getUserPersonalInfo);

    return (
        <VStack>
            {
                Object.entries(userPersonalInfo).map(([key, value], index) => {
                    return (
                        <Input
                            key={`${key}__${index}`}
                            className={cls.personalInfoItem}
                            onChange={(e) => {
                                dispatch(personalAccountActions.setUserPersonalInfo({
                                    ...userPersonalInfo,
                                    [key]: e.target.value
                                }));
                            }}
                            value={value || ""}
                            placeholder={personalAccountData[key as keyof  UserPersonalInfo]}
                        />
                    );
                })
            }
            <Button
                size={"none"}
                borderColor={"none"}
                className={cls.saveButton}
                onClick={()=>{
                    dispatch(personalAccountActions.setPersonalAccountMode("static"));
                }}
            >
                <HStack>
                    <Text
                        tag={"p"}
                        className={cls.saveButtonText}
                    >
                        Сохранить
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

export {EditableInfo};