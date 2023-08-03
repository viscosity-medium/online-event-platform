import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface QuizScheme {
    currentQuestionIndex: number,
    userScore: number
    content: "quiz" | "results"
}

const initialState: QuizScheme = {
    currentQuestionIndex: 0,
    userScore: 0,
    content: "quiz"
};

const quiz = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setCurrentQuestion: (state, action: PayloadAction<number>) => {state.currentQuestionIndex = action.payload},
        setIncreasedUserScore: (state) => {state.userScore += 10},
        setResetParameters: (state) => {
            state.content = "quiz";
            state.currentQuestionIndex = 0;
            state.userScore = 0;
        }
    }
});

export const {
    reducer: quizReducer,
    actions: quizActions
} = quiz