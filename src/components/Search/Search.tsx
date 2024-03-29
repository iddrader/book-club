import { FormEvent, FunctionComponent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { fetchBooks } from "../../store/action-creators/booksFetched";
import "./search.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookCard from "../BookCard/BookCard";


const Search: FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const books = useAppSelector(state => state.booksFetched)
    const dispatch = useAppDispatch();

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const title = inputRef.current?.value;

        if(title != undefined)
            dispatch(fetchBooks(title)) 

    }
    return (
        <div className="search-page">
            <form action="" onSubmit={search} className="search-form">
                <label htmlFor="search" className="input-label">
                    <input type="text" name="search" id="search" ref={inputRef} placeholder="Book title"/>
                </label>
                <button type="submit"><SearchOutlinedIcon /></button>
            </form>
            { books?.loading && <div className="loading"></div> }
            <div className="books-list">
                { books?.books.map(book => <BookCard book={book}/>)}
            </div>
        </div>
    );
}
 
export default Search;