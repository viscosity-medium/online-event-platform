import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sidebarMenuReducer} from "@/widgets/common/SidebarMenu/model/SidebarMenu.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {personalAccountReducer} from "@/widgets/common/PersonalAccount/model/PersonalAccount.slice";
import {quizReducer} from "@/widgets/common/Quiz/model/Quiz.slice";

const rootReducer = combineReducers({
    sidebarMenu: sidebarMenuReducer,
    personalAccount: personalAccountReducer,
    quiz: quizReducer
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
