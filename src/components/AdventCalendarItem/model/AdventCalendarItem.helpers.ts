import {
    AdventCalendarItemType,
    GetAdventCalendarItemHeight
} from "@/components/AdventCalendarItem/model/AdventCalendarItem.types";
import cls from "@/components/AdventCalendarItem/ui/AdventCalendarItem.module.scss";

export const getAdventCalendarItemHeight = (({
	itemRef,
    itemType
}: GetAdventCalendarItemHeight) => {

    if(itemRef.current){
        switch (itemType){
            case "singleItemFilled":
                return {
                    itemWidth: itemRef.current.offsetWidth,
                    itemHeight: itemRef.current.offsetWidth || 0
                }
            case "doubleItemHorizontal":
                return {
                    itemWidth: itemRef.current.offsetWidth,
                    itemHeight: ((itemRef.current.offsetWidth) - 12 ) / 2 || 0
                };
            case "doubleItemVertical":
                return {
                    itemWidth: itemRef.current.offsetWidth,
                    itemHeight: itemRef.current.offsetWidth * 2 + 12 || 0
                };
            default:
                return {
                    itemWidth: 0,
                    itemHeight:  0
                };
        }
    } else {
        return {
            itemWidth: 0,
            itemHeight:  0
        };
    }

});

export const getAdventCalendarItemNumberClass = ({itemNumber}: {itemNumber: number}) => {

    const classesObject: Record<number, string> = {}

    for(let i=1;i<25;i++){
        classesObject[i] = cls[`GridElement_${[itemNumber]}`];
    }

    return classesObject[itemNumber]

};

export const getAdventCalendarItemTypeClasses = ({itemType}: {itemType: AdventCalendarItemType}) => {

    const adventCalendarItemTypeClasses: Record<AdventCalendarItemType, string> = {
        singleItemEmpty: cls.singleItemEmpty,
        singleItemFilled: cls.singleItemFilled,
        doubleItemVertical: cls.doubleItemVertical,
        doubleItemHorizontal: cls.doubleItemHorizontal
    };

    return adventCalendarItemTypeClasses[itemType];

};