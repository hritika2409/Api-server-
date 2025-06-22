import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    await axios.post('http://localhost:5000/api/books', book);
    fetchBooks();
  };

  const updateBook = async (id, updatedBook) => {
    await axios.put(`http://localhost:5000/api/books/${id}`, updatedBook);
    setEditingBook(null);
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>📚 Book Manager</h1>
      {editingBook ? (
        <EditBookForm book={editingBook} onUpdate={updateBook} onCancel={() => setEditingBook(null)} />
      ) : (
        <BookForm onAdd={addBook} />
      )}
      <BookList books={books} onEdit={setEditingBook} onDelete={deleteBook} />
    </div>
  );
};

export default App;
