import {HStack, VStack} from "@/components/Stack";
import {Window} from "@/components/Window";
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {useSelector} from "react-redux";
import {getQuizCurrentQuestionIndex} from "@/widgets/common/Quiz/model/Quiz.selectors";
import {FC, useState} from "react";
import {QuizProps} from "@/widgets/common/Quiz/model/Quiz.types";
import {useAppDispatch} from "@/store/store";
import {onSubmitButtonClickHelper} from "@/widgets/common/Quiz/model/Quiz.helpers";
import cls from "../Quiz/Quiz.module.scss";

const QuizContent: FC<QuizProps> = ({
    quizContentItem,
}) => {

    const dispatch = useAppDispatch();
    const currentQuestionIndex = useSelector(getQuizCurrentQuestionIndex);
    const [activeButtonIndex, setActiveButtonIndex] = useState<undefined | number>(undefined);

    const onAnswerButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    const onSubmitButtonClick = () => onSubmitButtonClickHelper({
        dispatch, setActiveButtonIndex,
        activeButtonIndex, currentQuestionIndex,
        rightAnswer: quizContentItem.rightAnswer
    })

    return (
        <>
            <Window>
                <Text
                    tag={"p"}
                    color={"darkBlue"}
                    align={"center"}
                    className={cls.quizWindowContent}
                >
                    {
                        quizContentItem.question
                    }
                </Text>
            </Window>
            <HStack
                className={cls.buttonWrapper}
                justify={"center"}
            >
                {
                    Object.values(quizContentItem.answers).map((answer, index)=>{
                        return(
                            <Button
                                size={"long"}
                                borderColor={"peach"}
                                backgroundColor={
                                    index === activeButtonIndex ? "active" : "passive"
                                }
                                onClick={()=>{
                                    onAnswerButtonClick(index);
                                }}
                            >
                                <Text
                                    tag={"p"}
                                    align={"center"}
                                    color={
                                        index === activeButtonIndex ? "white" : "lightBlue"
                                    }
                                >
                                    {
                                        answer
                                    }
                                </Text>
                            </Button>
                        )
                    })
                }
            </HStack>
            <Button
                size={"standard"}
                backgroundColor={"submit"}
                className={cls.submitButton}
                onClick={onSubmitButtonClick}
            >
                <Text
                    tag={"p"}
                    align={"center"}
                    color={"darkBlue"}
                >
                    Ответить
                </Text>
            </Button>
        </>
    )
};

export {QuizContent};