'use client'

import {createPortal} from "react-dom";
import cls from "./Modal.module.scss";
import {ReactNode} from "react";
import {useAppDispatch, useTypedSelector} from "@/store/store";
import {getModalIsShown} from "@/components/Modal/model/Modal.selectors";
import {modalActions} from "@/components/Modal/model/Modal.slice";

const Modal = ({
    children
}: {
    children?: ReactNode
}) => {

    const dispatch = useAppDispatch();
    const modalIsShown = useTypedSelector(getModalIsShown);
    const body = document.querySelector("body");

    const onModalClose = () => {
        dispatch(modalActions.setModalIsShown(false));
    }

    if (!body || !modalIsShown){
        return null
    }
    return (
        createPortal(
            <dialog
                className={
                    cls.modalWrapper
                }
            >
                {
                    children
                }
            </dialog>, body
        )
    );

};

export {Modal};