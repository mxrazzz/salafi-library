// src/components/common/Card/Card.tsx - Update the Card component
import React from 'react';
import { motion } from 'framer-motion';
import { truncateText } from '../../../utils/helpers';

export interface CardProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  linkTo?: string;
  badge?: string;
  progress?: number;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  linkTo,
  badge,
  progress,
  onClick,
  className = '',
}) => {
  // Truncate title and description to ensure fixed card sizes
  const truncatedTitle = truncateText(title, 50); // Max 50 characters for title
  const truncatedDescription = description
    ? truncateText(description, 120)
    : ''; // Max 120 characters for description

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={`bg-white border border-primary-100 rounded-xl overflow-hidden shadow-md transition-all duration-200 h-full flex flex-col relative ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -4, // Reduced lift for smoother feel
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '2px solid',
        borderColor: 'var(--color-secondary-500)', // Consistent border all around
        transition: { duration: 0.1 }, // Faster transition
      }}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <span className="bg-secondary-500 text-primary-800 text-xs font-semibold px-2.5 py-1.5 rounded-full">
                {badge}
              </span>
            </div>
          )}
          {progress !== undefined && (
            <div className="absolute bottom-3 left-3 right-3 bg-white/80 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          )}
        </div>
      )}

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary-800 mb-2 flex items-center h-16 line-clamp-2 overflow-hidden">
          {truncatedTitle}
        </h3>

        {subtitle && (
          <p className="text-primary-600 font-medium text-sm mb-1">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 h-18 overflow-hidden">
            {truncatedDescription}
          </p>
        )}

        <div className="pt-2 mt-auto">
          <motion.div
            className="text-secondary-600 font-medium text-sm flex items-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Explore
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
