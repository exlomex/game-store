export type consoleTypes = 'PC' | 'PS5' | 'PS4' | 'NINTENDO' | 'XBOX'
export type genreTypes = 'FIGHTING' | 'SPORT'

export interface ReviewType {
    "id": number,
    "description": string,
    "rating": number,
    "user": {
        "firstName": string,
        "lastName": string
    },
    "goodId": number
}
export interface GoodType {
    "id": number,
    "title": string,
    "price": number,
    "rating": number,
    "console": consoleTypes,
    "genre": genreTypes,
    "image": string | null,
    "orderedCount": number,
    "reviews": ReviewType[]
    "description": string;
}