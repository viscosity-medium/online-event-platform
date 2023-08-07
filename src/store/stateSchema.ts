import {SidebarMenuSliceSchema} from "@/widgets/common/SidebarMenu/model/SidebarMenu.slice";
import {PersonalAccountSchema} from "@/widgets/common/PersonalAccount/model/PersonalAccount.type";
import {QuizScheme} from "@/widgets/common/Quiz/model/Quiz.slice";
import {GalleryScheme} from "@/widgets/common/Gallery/model/Gallery.slice";
import {ModalScheme} from "@/components/Modal/model/Modal.slice";
import {PhotoSwiperSchema} from "@/widgets/common/PhotoSwiper/model/PhotoSwiper.slice";

export interface StateSchema {
    sidebarMenu: SidebarMenuSliceSchema
    personalAccount: PersonalAccountSchema
    quiz: QuizScheme
    gallery: GalleryScheme
    modal: ModalScheme
    photoSwiper: PhotoSwiperSchema
}
