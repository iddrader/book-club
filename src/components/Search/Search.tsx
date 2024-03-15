import { FormEvent, FunctionComponent, useEffect, useRef } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchBooks } from "../../store/action-creators/booksFetched";

const Search: FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const books = useSelector((state: RootState) => state.booksFetched)
    const dispatch = useAppDispatch()

    useEffect(() => {
    }, []);

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const title = inputRef.current?.value;

        if(title != undefined)
            dispatch(fetchBooks(title)) 

        console.log(books)
    }
    return (
        <>
            <form action="" onSubmit={search}>
                <label htmlFor="search">
                    Search
                    <input type="text" name="search" id="search" ref={inputRef}/>
                </label>
                <button type="submit">Search</button>
            </form>
            { books?.loading && <div>Loading</div> }
            { books?.books.map(book => <div>{book.title}</div>)}
        </>
    );
}
 
export default Search;