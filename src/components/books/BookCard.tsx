import React from 'react';
import { motion } from 'framer-motion';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  coverImage: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, description, coverImage }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{author}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default BookCard;