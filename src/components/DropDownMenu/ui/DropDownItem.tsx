'use client';

import {Button} from "@/components/Button";
import {Image} from "@/components/Image";
import DartBoard from "@/assets/mainPage/schedule/dartBoard.svg"
import cls from "./DropDown.module.scss";
import {HStack, VStack} from "@/components/Stack";
import {Text} from "@/components/Text";
import {useEffect, useRef, useState} from "react";
import {before} from "node:test";
import {useResizeWindow} from "@/hooks/hooks";

const DropDownItem = () => {

    const [curtainHeight, setCurtainHeight] = useState<number>(0);
    const [textContentHeight, setTextContentHeight] = useState<number>(0);
    const listItemRef = useRef<HTMLLIElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const resizeDropDownItem = () => {

        if(isOpen && listItemRef.current){

            const buttonHeight = buttonRef.current?.offsetHeight || 0;
            const textContentHeight = contentRef.current?.offsetHeight || 0;
            const listItemNodeStyle: CSSStyleDeclaration = window.getComputedStyle(listItemRef.current);
            const listItemBottomMarginValue = +listItemNodeStyle.getPropertyValue('margin-bottom').replace(/px/,"");

            setTextContentHeight(textContentHeight || 0);
            setCurtainHeight(buttonHeight + textContentHeight + listItemBottomMarginValue);

        }

    };

   useResizeWindow({
       functionToExecute: resizeDropDownItem,
       dependencies: [isOpen]
   })

    return (
        <li
            ref={listItemRef}
            className={`${
            cls.dropDownItemUnOrderListItem
        }`}>
            <VStack>
                <Button
                    reference={buttonRef}
                    size={"fullSize"}
                    backgroundColor={"passive"}
                    className={cls.dropDownItemButton}
                    onClick={()=>{
                        setIsOpen(prevState => !prevState)
                    }}
                >
                    <HStack>
                        <Image
                            src={DartBoard}
                            alt={"dart-board.svg"}
                        />
                        <Text
                            tag={"p"}
                            className={cls.dropDownItemTitle}
                        >
                            Привет
                        </Text>
                    </HStack>

                </Button>
                <div
                    ref={textWrapperRef}
                    className={cls.dropDownItemOuterTextWrapper}
                >

                    <div
                        className={cls.fakeCurtain}
                        style={{
                            height: isOpen ? curtainHeight : 0,
                        }}
                    >
                        <Text
                            tag={"p"}
                            reference={contentRef}
                            className={cls.textContent}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid consequatur doloremque dolores, est eum magnam, maxime minima nesciunt obcaecati possimus praesentium quam recusandae repellat saepe soluta suscipit veritatis voluptates.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid consequatur doloremque dolores, est eum magnam, maxime minima nesciunt obcaecati possimus praesentium quam recusandae repellat saepe soluta suscipit veritatis voluptates.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid consequatur doloremque dolores, est eum magnam, maxime minima nesciunt obcaecati possimus praesentium quam recusandae repellat saepe soluta suscipit veritatis voluptates.

                        </Text>
                        <div
                            className={cls.innerBottomDecoration}
                        />
                    </div>
                    <div
                        className={cls.fakeTextContent}
                        style={{
                            height: isOpen ? textContentHeight : 0,
                        }}
                    ></div>
                </div>
            </VStack>
        </li>
    );
};

export { DropDownItem };