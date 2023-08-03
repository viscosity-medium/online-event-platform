import {Promo} from "@/widgets/common/Promo";
import {Broadcast} from "../widgets/common/Broadcast";
import {AdventCalendar} from "@/widgets/mainPage/AdventCalendar";
import {Activities} from "@/widgets/mainPage/Activities";
import {Faq} from "@/widgets/common/Faq";
import {VStack} from "@/components/Stack";
import cls from "./page.module.scss"
import {Gifts} from "@/widgets/common/Gifts";

const Page = () => {
    
    return (
        <>
            <Promo/>
            <VStack className={cls.MainContentWrapper}>
                <Broadcast
                	hTagText={"Трансляция"}
                    decorativeColors={["outer", "middle", "inner"]}
                />
                <AdventCalendar/>
                {/*<Schedule/>*/}
                <Activities/>
                <Gifts/>
                <Faq/>
            </VStack>
        </>
    );

};

export default Page;