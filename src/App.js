import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([
      ...books,
      {
        id: Math.round(Math.random() * 10000),
        title,
      },
    ]);
  };
  console.log("Books:", books)
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
