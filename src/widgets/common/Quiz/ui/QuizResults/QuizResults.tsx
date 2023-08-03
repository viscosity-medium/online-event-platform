import {VStack} from "@/components/Stack";
import cls from "../Quiz/Quiz.module.scss"
import {Text} from "@/components/Text";
import {Image} from "@/components/Image";
import {getQuizResults} from "@/widgets/common/Quiz/model/Quiz.helpers";
import {Button} from "@/components/Button";
import {useSelector} from "react-redux";
import {getUserQuizScore} from "@/widgets/common/Quiz/model/Quiz.selectors";

import {useRef} from "react";
import Link from "next/link";

const QuizResults = () => {

    const linkRef = useRef<HTMLAnchorElement>(null)
    const onSubmitButton = () => {
        linkRef.current?.click();
    };
    const userScore = useSelector(getUserQuizScore);
    const {
        title,
        description,
        imageSource
    } = getQuizResults({userScore});

    return (
        <VStack
            align={"center"}
            className={cls.quizResultsCard}
        >
            <Text
                tag={"h3"}
                align={"center"}
                className={cls.quizResultsTitle}
            >
                {title}
            </Text>
            <Image
                src={imageSource}
                alt={title}
                className={cls.quizResultsImage}
            />
            <Text
                tag={"p"}
                align={"center"}
                className={cls.quizResultsDescription}
            >
                {description}
            </Text>
            <Button
                size={"fullSize"}
                backgroundColor={"secondary"}
                className={cls.quizResultsButton}
                onClick={onSubmitButton}
            >
                <Text
                    tag={"p"}
                    align={"center"}
                    color={"white"}
                >
                    Ок
                </Text>
            </Button>
            <Link
                ref={linkRef}
                href={"/"}
            />
        </VStack>
    );

};

export {QuizResults};