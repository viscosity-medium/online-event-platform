import {ResizeDropDownItemProps} from "@/components/DropDownMenu/model/DropDownMenu.types";

const resizeDropDownItem = (properties: ResizeDropDownItemProps) => {

    const {isOpen, buttonRef, contentRef, listItemRef, setTextContentHeight, setCurtainHeight} = properties

    if(isOpen && listItemRef.current){

        const buttonHeight = buttonRef.current?.offsetHeight || 0;
        const textContentHeight = contentRef.current?.offsetHeight || 0;
        const listItemNodeStyle: CSSStyleDeclaration = window.getComputedStyle(listItemRef.current);
        const listItemBottomMarginValue = +listItemNodeStyle.getPropertyValue('margin-bottom').replace(/px/,"");

        setTextContentHeight(textContentHeight || 0);
        setCurtainHeight(buttonHeight + textContentHeight + listItemBottomMarginValue);

    }

};

export { resizeDropDownItem };