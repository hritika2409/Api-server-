import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: '', author: '', publishedYear: '', genre: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', author: '', publishedYear: '', genre: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <input name="publishedYear" placeholder="Year" value={form.publishedYear} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
