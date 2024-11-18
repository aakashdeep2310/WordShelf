import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const Products = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/all-books");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(Array.isArray(data) ? data.slice(7, 13) : []);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to fetch books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-blue-700">Products</h1>
                <p className="text-lg text-gray-600 mt-1">Explore our collection of books</p>
            </header>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg text-gray-600">Loading...</p>
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg text-red-600">{error}</p>
                </div>
            ) : (
                <BookCards books={books} headline="Other Books"/>
            )}
        </div>
    );
};

export default Products;
