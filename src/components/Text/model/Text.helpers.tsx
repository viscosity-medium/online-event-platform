import {DefineTag} from "@/components/Text/model/Text.types";
import textClass from "../ui/Text.module.scss";

export const defineTextTag = ({tag, children, cls}: DefineTag) => {

    switch (tag){
        case "h1":
            return <h1 className={`${cls} ${textClass.text}`}>{children}</h1>
        case "h2":
            return <h2 className={`${cls} ${textClass.text}`}>{children}</h2>
        case "h3":
            return <h3 className={`${cls} ${textClass.text}`}>{children}</h3>
        case "h4":
            return <h4 className={`${cls} ${textClass.text}`}>{children}</h4>
        case "h5":
            return <h5 className={`${cls} ${textClass.text}`}>{children}</h5>
        case "h6":
            return <h6 className={`${cls} ${textClass.text}`}>{children}</h6>
        case "p":
            return <p className={`${cls} ${textClass.text}`}>{children}</p>
        case "span":
            return <span className={`${cls} ${textClass.text}`}>{children}</span>
    }

}