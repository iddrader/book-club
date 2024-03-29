// export enum bookStatusTypes {
//     COMPLETE = "COMPLETE",
//     PLANNING = "PLANING",
//     READING = "READING",
//     DROPPED = "DROPPED"
// }

export enum BookActionTypes {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
}

export interface IBook {
    title: string;
    author_name: string;
    cover_i: number;
    ratings_average: number;
}

export interface IBooksFetched {
    books: IBook[];
    error: string | null;
    loading: boolean;
}

interface IFetchBooksAction {
    type: BookActionTypes.FETCH_BOOKS;
}

interface IFetchBooksSuccessAction {
    type: BookActionTypes.FETCH_BOOKS_SUCCESS;
    payload: any[];
}

interface IFetchBooksErrorAction {
    type: BookActionTypes.FETCH_BOOKS_ERROR;
    payload: string;
}

export type BooksFetchedAction = IFetchBooksAction | IFetchBooksSuccessAction | IFetchBooksErrorAction;