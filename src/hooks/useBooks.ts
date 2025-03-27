import { useQuery } from '@tanstack/react-query';
import { fetchBooks } from '../services/bookService';
import { Book } from '../types/Book';

export const useBooks = () => {
  return useQuery<Book[], Error>('books', fetchBooks);
};

export const useBook = (id: string) => {
  return useQuery<Book, Error>(['book', id], () =>
    fetchBooks().then((books) => books.find((book) => book.id === id)),
  );
};

export default useBooks;
