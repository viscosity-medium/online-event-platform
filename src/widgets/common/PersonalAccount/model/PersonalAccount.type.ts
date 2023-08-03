export type Mode = "static" | "editable"
export interface UserPersonalInfo {
    personalization?: string
    favouriteColor?: string
    userMood?: string
    newYearAttitude?: string
    favouriteSport?: string
}

export interface UserPersonalGoals {
    fillProfile: boolean,
    setPhoto: boolean
    passQuiz: boolean
}

export interface PersonalAccountSchema {
    mode: Mode
    userPersonalInfo: UserPersonalInfo
    userPersonalGoals: UserPersonalGoals
}