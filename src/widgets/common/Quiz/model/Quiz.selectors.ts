import {StateSchema} from "@/store/stateSchema";

export const getQuizCurrentQuestionIndex = (state: StateSchema) => state.quiz.currentQuestionIndex;
export const getUserQuizScore = (state: StateSchema) => state.quiz.userScore;