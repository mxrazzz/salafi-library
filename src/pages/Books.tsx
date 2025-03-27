import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card/Card';
import { bookCategories, getRecentlyAddedBooks } from '../services/booksData';

const Books: React.FC = () => {
  // Get the most recently added books
  const recentlyAddedBooks = getRecentlyAddedBooks(4);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          Islamic Library
        </h1>
        <p className="text-gray-600">
          Browse our comprehensive collection of authentic Islamic books.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary-700">
          Book Categories
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {bookCategories.map((category) => (
            <Link to={`/books/category/${category.id}`} key={category.id}>
              <Card
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
              />
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary-700">
          Popular Books
        </h2>
        {/* Changed from grid-cols-4 to grid-cols-3 for consistency with category pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/books/usool-thalatha">
            <Card
              title="The Three Fundamental Principles"
              description="A fundamental text covering the three principles every Muslim must know."
              imageUrl="/bookicon.png"
            />
          </Link>
          <Link to="/books/kitab-tawheed">
            <Card
              title="Kitab at-Tawheed"
              description="The Book of Monotheism is one of the most important works in Islamic theology."
              imageUrl="/bookicon.png"
            />
          </Link>
          {/* More popular books would go here */}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary-700">
          Recently Added
        </h2>
        {/* Changed from grid-cols-4 to grid-cols-3 with increased gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentlyAddedBooks.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <Card
                title={book.title}
                description={book.description}
                imageUrl={book.coverImageUrl}
                subtitle={book.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
