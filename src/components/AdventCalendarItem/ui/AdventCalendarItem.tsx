"use client"

import {FC, useRef} from 'react';
import {Button} from "@/components/Button";
import {AdventCalendarItemProps} from "@/components/AdventCalendarItem/model/AdventCalendarItem.types";
import {
    getAdventCalendarItemHeight,
    getAdventCalendarItemNumberClass,
    getAdventCalendarItemTypeClasses
} from "@/components/AdventCalendarItem/model/AdventCalendarItem.helpers";
import {useAppDispatch} from "@/store/store";
import {modalActions} from "@/components/Modal/model/Modal.slice";

const AdventCalendarItem: FC<AdventCalendarItemProps> = ({
	itemType,
    itemNumber,
    imageSource,
	className = ""
}) => {

    const dispatch = useAppDispatch();
    const itemRef = useRef<HTMLButtonElement>(null);
    const {itemHeight} = getAdventCalendarItemHeight({itemRef, itemType})
    const itemTypeClass = getAdventCalendarItemTypeClasses({itemType})
    const itemNumberClass = getAdventCalendarItemNumberClass({itemNumber});
    const classes = `${ itemTypeClass } ${ itemNumberClass } ${className}`;

    const onButtonCLick = () => {
        dispatch(modalActions.setModalIsShown(true));
    };

    const style = itemHeight ? {
        height: `${itemHeight}px`
    } : {}

    return (
        <Button
            className={classes}
			reference={itemRef}
            style={style}
            onClick={onButtonCLick}
        >
            {
                imageSource
            }
        </Button>
    );

};

export { AdventCalendarItem };