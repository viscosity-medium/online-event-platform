import cls from './flex.module.scss';
import {Mods} from "@/types/commonHelpers.types";
import {combineClassnames} from "@/helpers/helpers";
import {FlexAlign, FlexDirection, FlexGap, FlexJustify, StackProps} from "../model/Stack.types";

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

const Flex = (props: StackProps) => {
    const {
        className = '',
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={
            	combineClassnames(cls.Flex, mods, classes)
        	}
        >
            {children}
        </div>
    );

};

export { Flex };
