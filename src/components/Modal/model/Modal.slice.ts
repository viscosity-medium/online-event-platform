import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ModalScheme{
    modalIsShown: boolean
}

const initialState: ModalScheme = {
    modalIsShown: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalIsShown: (state, action: PayloadAction<boolean>) => {state.modalIsShown = action.payload}
    }
});

export const {
    reducer: modalReducer,
    actions: modalActions
} = modalSlice;