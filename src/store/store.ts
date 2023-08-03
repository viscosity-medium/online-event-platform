import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sidebarMenuReducer} from "@/widgets/common/SidebarMenu/model/SidebarMenu.slice";
import {useDispatch} from "react-redux";
import {personalAccountReducer} from "@/widgets/common/PersonalAccount/model/PersonalAccount.slice";
import {quizReducer} from "@/widgets/common/Quiz/model/Quiz.slice";

export const store = configureStore({
    reducer: combineReducers({
        sidebarMenu: sidebarMenuReducer,
        personalAccount: personalAccountReducer,
        quiz: quizReducer
    }),
});

export type RootState = ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
