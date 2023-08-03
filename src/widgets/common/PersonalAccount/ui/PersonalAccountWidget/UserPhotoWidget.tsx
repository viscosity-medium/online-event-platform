import UserDefaultPhoto from "@/assets/common/personal-account/user-default-photo.png"
import {HStack, VStack} from "@/components/Stack";
import {Image} from "@/components/Image";
import cls from "./PersonalAccountWidget.module.scss";

export interface UserPhotoWidgetProps {
    widgetType: "bigWidget" | "smallWidget",

}


const UserPhotoWidget = ({
    widgetType = "bigWidget"
}: UserPhotoWidgetProps) => {

    const widgetTypeClass = {
        bigWidget: cls.bigWidget,
        smallWidget: cls.smallWidget
    };

    return (
        <HStack
            justify={"center"}
            align={"center"}
            className={`${widgetTypeClass[widgetType]} ${cls.userWidgetOuter}`}
        >
            <HStack
                justify={"center"}
                align={"center"}
                className={cls.userWidgetInner}
            >
                <Image
                    src={UserDefaultPhoto}
                    alt={"user-account-image.png"}
                    className={cls.userPhotoImage}
                />
            </HStack>
        </HStack>
    );

};

export {UserPhotoWidget};