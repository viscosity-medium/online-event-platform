import {SidebarMenuSliceSchema} from "@/widgets/common/SidebarMenu/model/SidebarMenu.slice";
import {PersonalAccountSchema} from "@/widgets/common/PersonalAccount/model/PersonalAccount.type";
import {QuizScheme} from "@/widgets/common/Quiz/model/Quiz.slice";

export interface StoreSchema {
    sidebarMenu: SidebarMenuSliceSchema
    personalAccount: PersonalAccountSchema
    quiz: QuizScheme
}
