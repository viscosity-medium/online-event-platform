import {ResizeGridProperties} from "@/widgets/mainPage/AdventCalendar/model/AdventCalendar.types";

export const resizeGrid = ({
    itemGap,
    numberOfItems,
    gridContainerRef,
    itemDimensionSize,
    setRowLinesNumber,
    setColumnLinesNumber,
    setAmountOfElementsInRow
}: ResizeGridProperties) => {

    const gridContainerWidth = gridContainerRef?.current?.clientWidth || itemDimensionSize;

    const numberOfElementsInRowWithTrunc = Math.trunc((gridContainerWidth + itemGap) / (itemDimensionSize + itemGap));
    const numberOfElementsInRowWithGap = numberOfElementsInRowWithTrunc > 3 ?
        numberOfElementsInRowWithTrunc : 3;

    const columnContainerLinesTrunc = Math.trunc(((gridContainerWidth || itemDimensionSize) + itemGap) / (itemDimensionSize + itemGap)) + 1;
    const columnContainerLines = columnContainerLinesTrunc > 1 ? (
        columnContainerLinesTrunc < 11 ? columnContainerLinesTrunc : 10
    ) : 2;

    const rowContainerLinesTrunc = Math.trunc(numberOfItems / (columnContainerLines - 2));
    const rowContainerLines = columnContainerLines > 2 ? rowContainerLinesTrunc : numberOfItems;

    setRowLinesNumber(prev => rowContainerLines);
    setColumnLinesNumber(prevState => columnContainerLines);
    setAmountOfElementsInRow(prevState => numberOfElementsInRowWithGap);

};

