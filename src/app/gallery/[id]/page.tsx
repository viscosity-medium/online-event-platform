'use client';

import {DecorativeBackground} from "@/components/DecorativeBackground";
import {Section} from "@/components/Section";
import {usePathname, useRouter} from "next/navigation";
import {Gallery} from "@/widgets/common/Gallery";
import {getContent} from "@/widgets/common/Gallery/model/Gallery.helpers";
import cls from "./page.module.scss";
import {useAppDispatch} from "@/store/store";

const GalleryPage = () => {

    const pathname = usePathname();
    const {push: goToAnotherPage} = useRouter();
    const dispatch = useAppDispatch();
    const content = getContent({
        pathname,
        dispatch,
        goToAnotherPage
    });

    return (
        <>
            <DecorativeBackground
                stripeLeft={"none"}
                stripeRight={"christmasTreeToys2"}
                background={"withStick"}
            />
            <Section
                id={"GalleryPage"}
                hTag={"h2"}
                hTagText={content?.hTagText || "ss"}
                textAlign={"start"}
                className={cls.galleryWrapper}
            >
                <Gallery
                    buttonDownGroup={content?.buttonGroup}
                />
            </Section>
        </>

    );
};

export default GalleryPage;