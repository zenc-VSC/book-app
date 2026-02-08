import React from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard.jsx";

function Books() {
  console.log(books.map((book) => book.title));
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Books;
