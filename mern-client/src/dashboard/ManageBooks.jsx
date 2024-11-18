import React, { useState } from 'react';

const ManageBooks = () => {
  // State to manage books
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10.99' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$12.99' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [formData, setFormData] = useState({ title: '', author: '', price: '' });

  // Handle adding or updating a book
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      // Edit existing book
      setBooks(books.map(book => book.id === currentBook.id ? { ...book, ...formData } : book));
    } else {
      // Add new book
      setBooks([...books, { id: Date.now(), ...formData }]);
    }
    setFormData({ title: '', author: '', price: '' });
    setCurrentBook(null);
    setIsModalOpen(false);
  };

  // Handle opening modal for adding or editing
  const openModal = (book = null) => {
    if (book) {
      setFormData({ title: book.title, author: book.author, price: book.price });
      setCurrentBook(book);
    } else {
      setFormData({ title: '', author: '', price: '' });
      setCurrentBook(null);
    }
    setIsModalOpen(true);
  };

  // Handle deleting a book
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto pt-20 pl-9 ml-1">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Manage Books</h1>
        <p className="text-lg text-gray-600 mt-1">Add, Edit, and Remove books from the inventory.</p>
      </header>
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Book Inventory</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => openModal()}
          >
            Add New Book
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map(book => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 mr-2"
                    onClick={() => openModal(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Modal for Add/Edit Book */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{currentBook ? 'Edit Book' : 'Add New Book'}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
