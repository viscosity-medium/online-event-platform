import {FC} from "react";
import {QuizProps} from "@/widgets/common/Quiz/model/Quiz.types";
import {useSelector} from "react-redux";
import {getQuizCurrentQuestionIndex} from "@/widgets/common/Quiz/model/Quiz.selectors";
import {getQuizStaticContent} from "@/widgets/common/Quiz/model/Quiz.helpers";
import {QuizContent} from "@/widgets/common/Quiz/ui/QuizContent/QuizContent";
import {QuizResults} from "@/widgets/common/Quiz/ui/QuizResults/QuizResults";
import {Section} from "@/components/Section";
import cls from "@/widgets/common/Quiz/ui/Quiz/Quiz.module.scss";
import { VStack } from "@/components/Stack";
import {useResetQuizParameters} from "@/widgets/common/Quiz/model/Quiz.hooks";
import {useTypedSelector} from "@/store/store";

const Quiz: FC<QuizProps> = ({
    quizContentItem,
}) => {

    useResetQuizParameters();

    const contentLength = getQuizStaticContent().length;
    const currentQuestionIndex = useTypedSelector(getQuizCurrentQuestionIndex);
    const contentToDisplay = contentLength !== currentQuestionIndex + 1 ? (
        <QuizContent
            quizContentItem={quizContentItem}
        />
    ) : (
        <QuizResults/>
    );

    return (
        <Section
            id={"quiz"}
            hTag={"h2"}
            hTagText={"Тест “КТО ТЫ В МАГИИ?”"}
            textAlign={"start"}
            className={cls.quizSection}
        >
            <VStack
                align={"center"}
            >
                {
                    contentToDisplay
                }
            </VStack>
        </Section>
    )

};

export {Quiz};