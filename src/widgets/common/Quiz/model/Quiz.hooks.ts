import {useEffect} from "react";
import {useAppDispatch} from "@/store/store";
import {quizActions} from "@/widgets/common/Quiz/model/Quiz.slice";

export const useResetQuizParameters = () => {

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(quizActions.setResetParameters());
    },[]);

};