export enum bookStatusTypes {
    COMPLETE = "COMPLETE",
    PLANNING = "PLANING",
    READING = "READING",
    DROPPED = "DROPPED"
}

export interface IBook {
    title: string;
    author: string;
    publish_year: number;
    status: bookStatusTypes;
}