import { FormEvent, FunctionComponent, useEffect, useRef } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

const Search: FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement>()
    const books = useSelector((state: RootState) => state.booksFetched)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(fetchBooks('the hobbit'))
    }, []);

    const search = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const title = inputRef.current?.value;
        console.log(title)
    }

    return (
        <>
            <form action="">
                <label htmlFor="search">
                    Search
                    <input type="text" name="search" id="search" ref={inputRef}/>
                </label>
                <button type="submit" onClick={search}>Search</button>
            </form>

        </>
    );
}
 
export default Search;