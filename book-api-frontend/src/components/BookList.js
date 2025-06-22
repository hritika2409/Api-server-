import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 && <p>No books found.</p>}
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} ({book.publishedYear}) [{book.genre}]
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
