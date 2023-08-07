"use client"

import {useRef, useState} from 'react';
import {Section} from "@/components/Section";
import cls from "./AdventCalendar.module.scss"
import {useResizeWindow} from "@/hooks/hooks";
import {resizeGrid} from "@/widgets/mainPage/AdventCalendar/model/AdventCalendar.helpers";
import {adventCalendarItemsData} from "@/components/AdventCalendarItem/model/AdventCalendarItem.data";
import {AdventCalendarItem} from "@/components/AdventCalendarItem";

const AdventCalendar = () => {

    const gridContainerRef = useRef<HTMLDivElement>(null);
    const [amountOfElementsInRow, setAmountOfElementsInRow] = useState<number>(0);
    const [columnLinesNumber, setColumnLinesNumber] = useState<number>(0);
    const [rowLinesNumber, setRowLinesNumber] = useState<number>(0);

    const numberOfItems = 36
    const itemDimensionSize = 158;
    const itemGap = 12;

    const resizeGridProperties = {
        itemGap,
        numberOfItems,
        gridContainerRef,
        itemDimensionSize,
        setRowLinesNumber,
        setColumnLinesNumber,
        setAmountOfElementsInRow
    };

    useResizeWindow({
        functionToExecute: () => resizeGrid(resizeGridProperties)
    });

    return (
        <Section
            hTag={"h2"}
            id={"advent-calendar"}
            hTagText={"Адвент-календарь"}
        >
		<div
            className={cls.gridContainer}
            ref={gridContainerRef}
            // style={{
            //     display: "grid",
            //     gridTemplateColumns: `repeat(${amountOfElementsInRow}, ${itemDimensionSize}px)`,
            //     gap: `${itemGap}px`
            // }}
        >
            {
                adventCalendarItemsData.map(({itemType, itemNumber, imageSource}) =>
                    <AdventCalendarItem
                        key={`${itemNumber}-${itemType}`}
                        itemType={itemType}
                        itemNumber={itemNumber}
                        ImageSource={imageSource}
                    />
                )
            }
        </div>

        </Section>
    );
};

export { AdventCalendar };