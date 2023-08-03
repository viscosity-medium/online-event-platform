import {StoreSchema} from "@/store/storeSchema";

export const getPersonalAccountMode = (state: StoreSchema) => state.personalAccount.mode;
export const getUserPersonalInfo = (state: StoreSchema) => state.personalAccount.userPersonalInfo;
export const getUserPersonalGoals = (state: StoreSchema) => state.personalAccount.userPersonalGoals;