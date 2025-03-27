import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getBookById } from '../services/bookService';
import { Book } from '../types/Book';

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    const { data: book, isLoading, error } = useQuery<Book, Error>(['book', id], () => getBookById(id));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading book details</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="mt-2 text-gray-700">{book.description}</p>
            <div className="mt-4">
                <h2 className="text-xl">Author: {book.author}</h2>
                <p>Published: {book.publishedDate}</p>
            </div>
        </div>
    );
};

export default BookDetails;