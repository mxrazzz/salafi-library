import { api, fetchBooks as apiFetchBooks, getBookById as apiGetBookById } from './api';
import { Book } from '../types/Book';

export const fetchBooks = async (): Promise<Book[]> => {
  return apiFetchBooks();
};

export const getBookById = async (id: string): Promise<Book> => {
  return apiGetBookById(id);
};