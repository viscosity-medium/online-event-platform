import {daySinceStartDate} from "@/helpers/helpers";
import {quizContentData1} from "@/widgets/common/Quiz/model/QuizContentData/quizContentData1";
import {quizContentData2} from "@/widgets/common/Quiz/model/QuizContentData/quizContentData2";
import {quizContentData3} from "@/widgets/common/Quiz/model/QuizContentData/quizContentData3";
import {quizContentData4} from "@/widgets/common/Quiz/model/QuizContentData/quizContentData4";
import {quizContentData5} from "@/widgets/common/Quiz/model/QuizContentData/quizContentData5";
import {GetQuizStaticContent} from "@/widgets/common/Quiz/model/Quiz.types";
import {quizActions} from "@/widgets/common/Quiz/model/Quiz.slice";
import {Dispatch, SetStateAction} from "react";
import {useAppDispatch} from "@/store/store";
import {quizResultsData} from "@/widgets/common/Quiz/model/QuizResultsData/QuizResultsData";

export const getQuizStaticContent: GetQuizStaticContent = () => {

    const quizContentAllDays = [
        quizContentData1,
        quizContentData2,
        quizContentData3,
        quizContentData4,
        quizContentData5,
    ];

    if (daySinceStartDate > 0 && daySinceStartDate < quizContentAllDays.length) {
        return quizContentAllDays[daySinceStartDate]
    } else if (daySinceStartDate>=quizContentAllDays.length) {
        return quizContentAllDays[quizContentAllDays.length - 1]
    } else {
        return  quizContentAllDays[0]
    }

};

export const getQuizResults = ({userScore}: {userScore: number}) => {

    if(userScore >= 30 && userScore < 50){
        return quizResultsData[1];
    } else if(userScore >= 50 && userScore < 70){
        return quizResultsData[2];
    } else if(userScore >= 70 && userScore < 90){
        return quizResultsData[3];
    } else if(userScore >= 90){
        return quizResultsData[4];
    } else {
        return quizResultsData[0];
    }

};

export const onSubmitButtonClickHelper = ({
    rightAnswer,
    activeButtonIndex,
    setActiveButtonIndex,
    currentQuestionIndex,
    dispatch
}: {
    rightAnswer: number,
    activeButtonIndex: number | undefined
    setActiveButtonIndex:  Dispatch<SetStateAction<number | undefined>>
    currentQuestionIndex: number
    dispatch: any
}) => {

    if(activeButtonIndex !== undefined){

        const activeButton = activeButtonIndex + 1;

        setActiveButtonIndex(undefined);
        dispatch(quizActions.setCurrentQuestion(currentQuestionIndex + 1));

        if(rightAnswer === activeButton){
            dispatch(quizActions.setIncreasedUserScore());
        }

    }

};