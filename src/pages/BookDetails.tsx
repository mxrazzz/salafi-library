import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getBookById, bookCategories } from '../services/booksData';

const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = getBookById(bookId || '');
  const category = book
    ? bookCategories.find((cat) => book.categories.includes(cat.id))
    : null;

  const [activeTab, setActiveTab] = useState<
    'overview' | 'matn' | 'sharh' | 'videos'
  >('overview');

  if (!book) {
    return <div className="container mx-auto p-6">Book not found</div>;
  }

  // Helper functions to accurately count resources
  const countExplanations = () => {
    if (book.resources.explanations && book.resources.explanations.length > 0) {
      return book.resources.explanations.length;
    } else if (book.resources.sharh) {
      return 1;
    }
    return 0;
  };

  const countVideos = () => {
    if (book.resources.videos && book.resources.videos.length > 0) {
      return book.resources.videos.length;
    } else if (book.resources.youtube?.playlistUrl) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-primary-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/books" className="hover:text-primary-600">
          Library
        </Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link
              to={`/books/category/${category.id}`}
              className="hover:text-primary-600 capitalize"
            >
              {category.title}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-primary-800 font-medium">{book.title}</span>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex mb-8">
        <div className="md:w-1/3 p-4">
          <img
            src={book.coverImageUrl}
            alt={book.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">
            {book.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">by {book.author}</p>
          <p className="text-gray-700 mb-6">{book.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {book.categories.map((cat) => {
              const category = bookCategories.find((c) => c.id === cat);
              return (
                <Link
                  key={cat}
                  to={`/books/category/${cat}`}
                  className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full hover:bg-primary-200"
                >
                  {category?.title || cat}
                </Link>
              );
            })}
          </div>

          <div className="text-sm text-gray-600 mb-6">
            <p>Language: {book.language}</p>
            <p>Published: {book.publishedDate}</p>
            <p className="mt-2 text-amber-700 font-medium">
              Note: Original texts (Matn) are in Arabic
            </p>
          </div>

          {/* User action buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md flex items-center transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Mark as Read
            </button>
            <button className="bg-secondary-500 hover:bg-secondary-600 text-primary-800 px-4 py-2 rounded-md flex items-center transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add to Library
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-md ${
                activeTab === 'overview'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>

            {book.resources.matn && (
              <button
                onClick={() => setActiveTab('matn')}
                className={`py-4 px-1 border-b-2 font-medium text-md ${
                  activeTab === 'matn'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Original Text
              </button>
            )}

            {countExplanations() > 0 && (
              <button
                onClick={() => setActiveTab('sharh')}
                className={`py-4 px-1 border-b-2 font-medium text-md ${
                  activeTab === 'sharh'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Explanations ({countExplanations()})
              </button>
            )}

            {countVideos() > 0 && (
              <button
                onClick={() => setActiveTab('videos')}
                className={`py-4 px-1 border-b-2 font-medium text-md ${
                  activeTab === 'videos'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Video Lectures ({countVideos()})
              </button>
            )}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary-700">
                  About this Book
                </h2>
                <p className="text-gray-700 mb-6">{book.description}</p>

                <h3 className="text-xl font-semibold mb-3 text-primary-700">
                  Available Resources
                </h3>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                  {book.resources.matn && (
                    <li className="mb-2">
                      Original Arabic Text{' '}
                      {book.resources.matn.title &&
                        `(${book.resources.matn.title})`}
                    </li>
                  )}

                  {book.resources.explanations
                    ? book.resources.explanations.map((exp, index) => (
                        <li key={index} className="mb-2">
                          {exp.title}
                        </li>
                      ))
                    : book.resources.sharh && (
                        <li className="mb-2">
                          {book.resources.sharh.title || 'Explanation'}
                        </li>
                      )}

                  {countVideos() > 0 && (
                    <li className="mb-2">
                      {countVideos()} video lecture series
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Matn (Original Text) Tab */}
            {activeTab === 'matn' && book.resources.matn && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary-700">
                    Original Arabic Text
                    {book.resources.matn.title &&
                      ` - ${book.resources.matn.title}`}
                  </h2>

                  {book.resources.matn.pdfUrl && (
                    <a
                      href={book.resources.matn.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </a>
                  )}
                </div>

                <div className="bg-cream-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    This is the original Arabic text of the book. It is
                    recommended for students who can read and understand Arabic.
                  </p>

                  <div className="text-center mt-4">
                    {book.resources.matn.pdfUrl && (
                      <a
                        href={book.resources.matn.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-primary-700 font-medium px-6 py-3 rounded-md transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Open Original Text (PDF)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Explanations (Sharh) Tab */}
            {activeTab === 'sharh' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-700">
                  Explanations (Sharh)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {book.resources.explanations
                    ? // Use the new array of explanations if available
                      book.resources.explanations.map((explanation, index) => (
                        <div
                          key={index}
                          className="bg-cream-100 rounded-lg p-6 shadow-sm"
                        >
                          <h3 className="text-xl font-bold text-primary-700 mb-3">
                            {explanation.title}
                          </h3>

                          {explanation.author && (
                            <p className="text-gray-600 mb-2">
                              By {explanation.author}
                            </p>
                          )}

                          <p className="text-gray-600 mb-4">
                            This is a detailed explanation of the original text,
                            making it accessible for students at all levels.
                          </p>

                          {explanation.pdfUrl && (
                            <a
                              href={explanation.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:text-primary-800"
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              Download PDF
                            </a>
                          )}
                        </div>
                      ))
                    : // Fallback to the old format if needed
                      book.resources.sharh && (
                        <div className="bg-cream-100 rounded-lg p-6 shadow-sm">
                          <h3 className="text-xl font-bold text-primary-700 mb-3">
                            {book.resources.sharh.title ||
                              'Explanation (Sharh)'}
                          </h3>

                          <p className="text-gray-600 mb-4">
                            This is a detailed explanation of the original text,
                            making it accessible for students at all levels.
                          </p>

                          {book.resources.sharh.pdfUrl && (
                            <a
                              href={book.resources.sharh.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:text-primary-800"
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              Download PDF
                            </a>
                          )}
                        </div>
                      )}
                </div>
              </div>
            )}

            {/* Video Lectures Tab */}
            {activeTab === 'videos' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-700">
                  Video Lectures
                </h2>

                <div className="space-y-8">
                  {book.resources.videos
                    ? // Use the new array of video playlists if available
                      book.resources.videos.map((playlist, index) => (
                        <div
                          key={index}
                          className="bg-cream-100 rounded-lg overflow-hidden"
                        >
                          <div className="bg-primary-700 text-white p-4">
                            <h3 className="text-xl font-semibold">
                              {playlist.title}
                            </h3>
                          </div>

                          <div className="p-6">
                            <p className="text-gray-700 mb-4">
                              This playlist contains video lectures explaining
                              the concepts covered in this book.
                            </p>

                            <div className="flex justify-between items-center">
                              <a
                                href={playlist.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-600 hover:text-primary-800"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Watch on YouTube
                              </a>

                              <span className="text-sm text-gray-500">
                                External Link
                              </span>
                            </div>

                            {/* Preview thumbnail */}
                            <div className="mt-4 relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                              {playlist.thumbnailUrl ? (
                                <img
                                  src={playlist.thumbnailUrl}
                                  alt={`Thumbnail for ${playlist.title}`}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg
                                    className="w-16 h-16 text-red-600"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    : // Fallback to the old format if needed
                      book.resources.youtube?.playlistUrl && (
                        <div className="bg-cream-100 rounded-lg overflow-hidden">
                          <div className="bg-primary-700 text-white p-4">
                            <h3 className="text-xl font-semibold">
                              Video Lectures
                            </h3>
                          </div>

                          <div className="p-6">
                            <p className="text-gray-700 mb-4">
                              This playlist contains video lectures explaining
                              the concepts covered in this book.
                            </p>

                            <div className="flex justify-between items-center">
                              <a
                                href={book.resources.youtube.playlistUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-600 hover:text-primary-800"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Watch on YouTube
                              </a>

                              <span className="text-sm text-gray-500">
                                External Link
                              </span>
                            </div>

                            <div className="mt-4 relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                  className="w-16 h-16 text-red-600"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Back to Books link */}
      <div className="text-center">
        <Link
          to="/books"
          className="inline-flex items-center text-primary-600 hover:text-primary-800"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            ></path>
          </svg>
          Back to Book List
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
