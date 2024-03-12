import { BooksFetchedAction, IBooksFetched, BookActionTypes } from "../../types/booksFetched"

const InitialState: IBooksFetched = {
    books: [],
    error: null,
    loading: false
}

export const booksFetchedReducer = (state = InitialState, action: BooksFetchedAction): IBooksFetched | undefined => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS:
            return { books: [], error: null, loading: true }
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return { books: action.payload, error: null, loading: false }
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return { books: [], error: action.payload, loading: false }
        default: 
            return state;
    }  
}