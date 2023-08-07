"use client"

import {FC, ReactNode, useRef} from 'react';
import {Button} from "@/components/Button";
import cls from "./AdventCalendarItem.module.scss";
import {
    AdventCalendarItemProps,
    AdventCalendarItemType
} from "@/components/AdventCalendarItem/model/AdventCalendarItem.types";
import {
    getAdventCalendarItemHeight,
    getAdventCalendarItemNumberClass, getAdventCalendarItemTypeClasses
} from "@/components/AdventCalendarItem/model/AdventCalendarItem.helpers";
import {Image} from "@/components/Image";

const AdventCalendarItem: FC<AdventCalendarItemProps> = ({
	itemType,
    itemNumber,
    ImageSource,
	className = ""
}) => {

    const itemRef = useRef<HTMLButtonElement>(null);
    const {itemWidth, itemHeight} = getAdventCalendarItemHeight({itemRef, itemType})
    const itemTypeClass = getAdventCalendarItemTypeClasses({itemType})
    const itemNumberClass = getAdventCalendarItemNumberClass({itemNumber});
    const classes = `${ itemTypeClass } ${ itemNumberClass } ${className}`;

    return (
        <Button
            className={classes}
			reference={itemRef}
            style={{
				height: `${itemHeight}px`
            }}
        >
            {// @ts-ignore
                <ImageSource/>
            }
        </Button>
    );

};

export { AdventCalendarItem };