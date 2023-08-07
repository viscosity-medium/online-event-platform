import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GalleryScheme {
    instructionIsShown: boolean
}

const initialState: GalleryScheme = {
    instructionIsShown: false
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setInstructionIsShown: (state, action: PayloadAction<boolean>) => {state.instructionIsShown = action.payload}
    }
});

export const {
    reducer: galleryReducer,
    actions: galleryActions
} = gallerySlice;