import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBookById } from '../../services/bookService';
import { Book } from '../../types/Book';

interface BookDetailsProps {
  bookId: string;
}

const BookDetails: React.FC<BookDetailsProps> = ({ bookId }) => {
  const { data: book, isLoading, error } = useQuery<Book, Error>(['book', bookId], () => getBookById(bookId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading book details</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{book?.title}</h1>
      <p className="mt-2 text-gray-700">{book?.description}</p>
      <p className="mt-4 text-lg">Author: {book?.author}</p>
      <p className="mt-2 text-lg">Published: {book?.publishedDate}</p>
    </div>
  );
};

export default BookDetails;