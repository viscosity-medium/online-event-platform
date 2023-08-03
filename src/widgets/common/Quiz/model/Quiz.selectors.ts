import {StoreSchema} from "@/store/storeSchema";

export const getQuizCurrentQuestionIndex = (state: StoreSchema) => state.quiz.currentQuestionIndex;
export const getUserQuizScore = (state: StoreSchema) => state.quiz.userScore;