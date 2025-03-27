// src/pages/BookCategories.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/common/Card/Card';
import { getBooksByCategory, bookCategories } from '../services/booksData';

const BookCategories: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const books = getBooksByCategory(categoryId || '');
  const category = bookCategories.find((cat) => cat.id === categoryId);

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

  if (!category) {
    return <div className="container mx-auto p-6">Category not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-primary-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/books" className="hover:text-primary-600">
          Library
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary-800 font-medium capitalize">
          {category.title}
        </span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-4 capitalize">
          {category.title} Books
        </h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {books.length === 0 ? (
        <p className="text-center text-gray-600">
          No books found in this category.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <Card
                title={book.title}
                subtitle={book.author}
                description={book.description}
                imageUrl={book.coverImageUrl}
                badge={book.language}
              />
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BookCategories;
