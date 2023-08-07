import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CurrentPhotoIndex = number | undefined

export interface PhotoSwiperSchema {
    currentPhotoIndex: CurrentPhotoIndex
}

export const initialState: PhotoSwiperSchema = {
    currentPhotoIndex: undefined
};

const photoSwiperSlice = createSlice({
    name: "photo-swiper",
    initialState,
    reducers: {
        setCurrentPhotoIndex: (state, action: PayloadAction<CurrentPhotoIndex>) => {state.currentPhotoIndex = action.payload}
    }
});

export const {
    reducer: photoSwiperReducer,
    actions: photoSwiperActions
} = photoSwiperSlice;