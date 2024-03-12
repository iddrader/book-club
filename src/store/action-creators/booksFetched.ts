import { Dispatch } from "redux"
import { BookActionTypes, BooksFetchedAction } from "../../types/booksFetched"
import axios from "axios"


export const fetchBooks = (request: string) => {
    const title = request.trim().split(" ").join("+")
    
    return async (dispatch: Dispatch<BooksFetchedAction>) => {
        try {
            dispatch({type: BookActionTypes.FETCH_BOOKS})
            const response = await axios.get(`https://openlibrary.org/search.json?q=${title}&limit=10`)
            dispatch({type: BookActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.docs})
        } catch (error) {
            dispatch({type: BookActionTypes.FETCH_BOOKS_ERROR, payload: "No books found"})
        }
    }
}