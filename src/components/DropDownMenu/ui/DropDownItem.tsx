'use client';

import {Button} from "@/components/Button";
import DartBoard from "@/assets/mainPage/schedule/dartBoard.svg"
import cls from "./DropDown.module.scss";
import {HStack, VStack} from "@/components/Stack";
import {Text} from "@/components/Text";
import {FC, useRef, useState} from "react";
import {useResizeWindow} from "@/hooks/hooks";
import {resizeDropDownItem} from "@/components/DropDownMenu/model/DropDownMenu.helpers";
import {Div} from "@/components/Div";
import {DropDownItemProps} from "@/components/DropDownMenu/model/DropDownMenu.types";
import {ListElement} from "@/components/UnorderedList/ListElement/ui/ListElement";

const DropDownItem: FC<DropDownItemProps> = ({
    title,
    description
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [curtainHeight, setCurtainHeight] = useState<number>(0);
    const [textContentHeight, setTextContentHeight] = useState<number>(0);
    const listItemRef = useRef<HTMLLIElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const properties = {
        isOpen, buttonRef, contentRef, listItemRef,
        setTextContentHeight, setCurtainHeight
    };

   useResizeWindow({
       callback: () => resizeDropDownItem(properties),
       dependencies: [isOpen]
   });

    return (
        <ListElement
            reference={listItemRef}
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
                        <DartBoard
                            alt={"dart-board.svg"}
                        />
                        <Text
                            tag={"p"}
                            className={cls.dropDownItemTitle}
                        >
                            {title}
                        </Text>
                    </HStack>
                </Button>
                <Div
                    className={cls.dropDownItemOuterTextWrapper}
                >
                    <Div
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
                            {
                                description
                            }
                        </Text>
                        <Div
                            className={cls.innerBottomDecoration}
                        />
                    </Div>
                    <Div
                        className={cls.fakeTextContent}
                        style={{
                            height: isOpen ? textContentHeight : 0,
                        }}
                    />
                </Div>
            </VStack>
        </ListElement>
    );
};

export { DropDownItem };