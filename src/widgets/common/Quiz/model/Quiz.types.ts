import {StaticImport} from "next/dist/shared/lib/get-img-props";

export interface QuizProps {
    quizContentItem: QuizStaticContentItem
}

interface QuizItemAnswers {
    1: string
    2: string
    3: string
    4: string
}

export interface QuizStaticContentItem {
    question: string,
    answers: QuizItemAnswers,
    rightAnswer: number
}

export type GetQuizStaticContent = () => QuizStaticContentItem[]

export interface QuizResultsDataItem {
    title: string,
    imageSource: StaticImport,
    description: string
}