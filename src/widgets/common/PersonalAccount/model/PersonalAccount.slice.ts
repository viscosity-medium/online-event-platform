import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    Mode,
    UserPersonalInfo,
    PersonalAccountSchema, UserPersonalGoals
} from "./PersonalAccount.type";

const initialState: PersonalAccountSchema = {
    mode: "static",
    userPersonalInfo: {
        personalization: undefined,
        favouriteColor: undefined,
        userMood: undefined,
        newYearAttitude: undefined,
        favouriteSport: undefined
    },
    userPersonalGoals: {
        fillProfile: false,
        setPhoto: false,
        passQuiz: false
    }
};

const personalAccountSlice = createSlice({
    name: "personalAccount",
    initialState,
    reducers: {
        setPersonalAccountMode: (state, action: PayloadAction<Mode>) => {state.mode = action.payload},
        setUserPersonalInfo: (state, action: PayloadAction<UserPersonalInfo>) => {state.userPersonalInfo = action.payload},
        setUserPersonalGoals: (state, action: PayloadAction<UserPersonalGoals>) => {state.userPersonalGoals = action.payload}
    }
});

export const {
    reducer: personalAccountReducer,
    actions: personalAccountActions
} = personalAccountSlice;