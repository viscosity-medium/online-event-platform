import Image from "next/image";
import {FC} from "react";
import {
    ImagePosition,
    NextImageProps,
    ObjectFitClasses,
    PositionClasses
} from "@/components/Image/model/CustomImage.types";
import cls from "./CustomImage.module.scss";
import {combineClassnames} from "@/helpers/helpers";

const CustomImage: FC<NextImageProps> = ({
	src,
	alt,
    width = 0,
    height = 0,
    className = "",
	position = "relative",
    objectFit = "cover",
    ...otherProps
}) => {

    const positionClasses: PositionClasses = {
        relative: cls.positionRelative,
        absolute: cls.positionAbsolute
    };
    const objectFitClasses: ObjectFitClasses ={
        contain: cls.objectFitContain,
        cover: cls.objectFitCover
    };
    const classes = [
        positionClasses[position],
        objectFitClasses[objectFit]
    ];


    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={combineClassnames(className, {}, classes)}
            {...otherProps}
        />
    );
};

export { CustomImage };