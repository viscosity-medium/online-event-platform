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

const date = new Date();
const fullStartDate = new Date("2023-08-02");
const daysDivider = 1000 * 60 * 60 * 24;
const currentDateSinceUnix = Math.floor(date.getTime() / daysDivider);
const startDateSinceUnix = Math.floor(fullStartDate.getTime() / daysDivider);
const daySinceStartDate = currentDateSinceUnix - startDateSinceUnix;
export {
    date,
    daySinceStartDate
}