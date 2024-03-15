import { FunctionComponent, useEffect, useState } from "react";
import { IBook } from "../../types/booksFetched";
import './bookCard.scss'
import axios from "axios";

interface BookCardProps {
    book: IBook;
}
 
const BookCard: FunctionComponent<BookCardProps> = ({book}) => {

    return (
        <div className="book-card" style={{
            background: `url(https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg)`
        }}>
            <p>{book.title}</p>
            <p>{book.author_name}</p>
        </div>
    );
}
 
export default BookCard;