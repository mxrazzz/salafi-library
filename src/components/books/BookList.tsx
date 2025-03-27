import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookCard from './BookCard';

export const BookList: React.FC = () => {
    const { data: books, isLoading, error } = useBooks();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading books</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {books?.map((book) => (
                <BookCard 
                  key={book.id} 
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  coverImage={book.coverImageUrl}
                />
            ))}
        </div>
    );
};

export default BookList;