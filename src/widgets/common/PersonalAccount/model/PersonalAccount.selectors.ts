import {StateSchema} from "@/store/stateSchema";

export const getPersonalAccountMode = (state: StateSchema) => state.personalAccount.mode;
export const getUserPersonalInfo = (state: StateSchema) => state.personalAccount.userPersonalInfo;
export const getUserPersonalGoals = (state: StateSchema) => state.personalAccount.userPersonalGoals;