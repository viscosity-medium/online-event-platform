'use client'

import {DropDownItem} from "@/components/DropDownMenu/ui/DropDownItem";
import cls from "./DropDown.module.scss"
import {FC} from "react";
import {DropDownData} from "@/components/DropDownMenu/model/DropDownMenu.types";

const DropDownMenu: FC<DropDownData> = ({
    dropdownData
}) => {

    return (
        <ul className={cls.dropDownItemUnOrderList}>
            {
                dropdownData.map((dropdownDataItem, index) => (
                    <DropDownItem
                        key={`${index}__${dropdownDataItem.title}`}
                        title={dropdownDataItem.title}
                        description={dropdownDataItem.description}
                    />
                ))
            }
        </ul>
    );

};

export { DropDownMenu };