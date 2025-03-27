import React from 'react';
import { useBooks } from '../hooks/useBooks';
import BookList from '../components/books/BookList';

const Books: React.FC = () => {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      {/* Don't pass books as a prop since BookList will fetch them itself */}
      <BookList />
    </div>
  );
};

export default Books;
