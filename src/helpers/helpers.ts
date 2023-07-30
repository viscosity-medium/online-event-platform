import {Mods} from "@/types/commonHelpers.types";

export const combineClassnames = (
    cls: string,
    mods: Mods,
    additional: Array<string | undefined> = []
): string => {

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ]
    .join(" ");

};