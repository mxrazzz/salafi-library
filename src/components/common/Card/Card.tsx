import React from 'react';
import { motion } from 'framer-motion';

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
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`bg-white border border-primary-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
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
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary-800 mb-2 flex items-center">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-primary-600 font-medium text-sm mb-1">{subtitle}</p>
        )}
        
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>
        )}
        
        <div className="pt-2 mt-auto">
          <motion.div 
            className="text-secondary-600 font-medium text-sm flex items-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Explore
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Islamic decorative border element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500"></div>
    </motion.div>
  );
};

export default Card;