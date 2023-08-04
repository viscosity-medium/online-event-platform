'use client'

import {Section} from "@/components/Section";
import {Quiz} from "@/widgets/common/Quiz/ui/Quiz/Quiz";
import {getQuizStaticContent} from "@/widgets/common/Quiz/model/Quiz.helpers";
import {useSelector} from "react-redux";
import {getQuizCurrentQuestionIndex} from "@/widgets/common/Quiz/model/Quiz.selectors";
import {useTypedSelector} from "@/store/store";

const Page = () => {

    const quizCurrentQuestionIndex = useTypedSelector(getQuizCurrentQuestionIndex);
    const quizContent = getQuizStaticContent();

    return (
        <Section
            id={"quiz"}
        >
            <Quiz
                quizContentItem={
                    quizContent[quizCurrentQuestionIndex]
                }
            />
        </Section>
    );
};

export default Page;