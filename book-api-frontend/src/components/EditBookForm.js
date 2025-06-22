import React, { useState } from 'react';

const EditBookForm = ({ book, onUpdate, onCancel }) => {
  const [form, setForm] = useState(book);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(book._id, form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <input name="title" value={form.title} onChange={handleChange} />
      <input name="author" value={form.author} onChange={handleChange} />
      <input name="publishedYear" value={form.publishedYear} onChange={handleChange} />
      <input name="genre" value={form.genre} onChange={handleChange} />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditBookForm;
