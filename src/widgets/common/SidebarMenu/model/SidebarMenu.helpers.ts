import {AppDispatch} from "@/store/store";
import { sidebarMenuActions } from "./SidebarMenu.slice";

export interface OnCloseButtonClick{
    dispatch: AppDispatch
};

export const onButtonClick = ({dispatch}: OnCloseButtonClick) => {
    dispatch(sidebarMenuActions.setMenuIsOpen());
};

