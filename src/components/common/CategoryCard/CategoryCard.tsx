import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  imageUrl,
  link,
}) => {
  return (
    <Link to={link}>
      <motion.div
        className="relative aspect-square overflow-hidden rounded-lg shadow-md"
        whileHover={{
          scale: 1.03,
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/90 to-primary-900/50 z-10" />

        {/* Background image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>

          {/* Decorative divider */}
          <div className="w-12 h-1 bg-secondary-500 rounded-full mb-3" />

          {/* Browse button */}
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full mt-2">
            Browse
            <svg
              className="w-3.5 h-3.5 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
