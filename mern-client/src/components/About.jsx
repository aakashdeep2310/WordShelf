import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700">About WordShelf</h1>
        <p className="text-lg text-gray-600 mt-2">Your go-to marketplace for buying and selling books.</p>
      </header>
      <section className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          {/* <img
            src="https://via.placeholder.com/150"
            alt="WordShelf Logo"
            className="w-32 h-32 rounded-full border-4 border-gray-300 mr-6"
          /> */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 " >Welcome to WordShelf</h2>
            <p className="text-gray-600 mt-1">Discover, Buy, and Sell Books Effortlessly</p>
          </div>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          At WordShelf, we believe in making books accessible to everyone. Our platform not only allows you to explore a wide range of literary works but also provides a seamless experience for buying and selling books. Whether you're looking to expand your personal library or find a new home for your old books, WordShelf is here to connect buyers and sellers in a simple and efficient manner.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          With a user-friendly interface, secure transactions, and a vibrant community of book lovers, WordShelf is designed to enhance your book-buying and selling experience. Browse through various categories, check out reviews, and find great deals on both new and used books. Join us and be part of a growing community that values the joy of reading and the convenience of online book transactions.
        </p>
      </section>
    </div>
  );
};

export default About;
