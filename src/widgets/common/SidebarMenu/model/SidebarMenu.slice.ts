import {createSlice} from "@reduxjs/toolkit";

export interface SidebarMenuSliceSchema {
    menuIsOpen: boolean
}

const initialState: SidebarMenuSliceSchema = {
    menuIsOpen: false
};

const sidebarMenuSlice = createSlice({
    name: "sidebarMenu",
    initialState,
    reducers: {
        setMenuIsOpen: (state) => {state.menuIsOpen = !state.menuIsOpen},
    }
});

export const {
    reducer: sidebarMenuReducer,
    actions: sidebarMenuActions
} = sidebarMenuSlice;