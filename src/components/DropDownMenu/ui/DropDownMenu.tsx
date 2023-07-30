import {DropDownItem} from "@/components/DropDownMenu/ui/DropDownItem";
import cls from "./DropDown.module.scss"

const DropDownMenu = () => {
    return (
        <ul className={cls.dropDownItemUnOrderList}>
			<DropDownItem/>
            <DropDownItem/>
        </ul>
    );
};

export { DropDownMenu };