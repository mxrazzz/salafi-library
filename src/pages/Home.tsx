import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card/Card';

const Home: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  // Use local paths for now to ensure images load

  const categories = [
    {
      id: 'books',
      title: 'Islamic Books',
      description:
        'Access a comprehensive collection of authentic Islamic texts from reliable sources.',
      imageUrl: '/library.jpg',
      link: '/books',
      badge: '300+ Books',
    },
    {
      id: 'scholars',
      title: 'Scholars',
      description:
        'Learn about the biographies and works of prominent Salafi scholars throughout history.',
      imageUrl: '/masjidNabawi.jpg',
      link: '/scholars',
      badge: '100+ Scholars',
    },
    {
      id: 'fatwas',
      title: 'Fatwas',
      description:
        'Browse through fatwas on various topics issued by trusted scholars of Ahlus Sunnah.',
      imageUrl: '/pen.png',
      link: '/fatwas',
      badge: '500+ Fatwas',
    },
    {
      id: 'courses',
      title: 'Courses',
      description:
        'Access structured Islamic courses with progressive levels from beginner to advanced.',
      imageUrl: '/bookicon.png',
      link: '/courses',
      badge: '50+ Courses',
    },
    {
      id: 'duas',
      title: 'Authentic Duas',
      description:
        'Collection of authentic duas and dhikr from the Quran and Sunnah with translations.',
      imageUrl: '/dua_card.png',
      link: '/duas',
      badge: '200+ Duas',
    },
    {
      id: 'quiz',
      title: 'Islamic Quiz',
      description:
        'Test your Islamic knowledge with our interactive quizzes on various topics.',
      imageUrl: '/quizLogo.png',
      link: '/quiz',
      badge: '20+ Topics',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="islamic-pattern"
                width="56"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M28 0L28 34L0 50L0 16L28 0Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M28 0L28 34L56 50L56 16L28 0Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M28 66L28 100L0 84L0 50L28 66Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M28 66L28 100L56 84L56 50L28 66Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <img src="/logo.png" alt="Logo" className="w-24 h-24 mx-auto" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 font-arabic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-secondary-400">Salafi</span> Library
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Access a vast collection of reliable Islamic resources based on
              the understanding of the Salaf as-Salih (righteous predecessors).
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#categories"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-800 font-bold py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center justify-center"
              >
                Explore Resources
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path d="M0 0L1440 0V48L720 24L0 48V0Z" fill="#F5F0DC" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              Explore Our{' '}
              <span className="text-secondary-600">Islamic Resources</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our comprehensive collection of authentic Islamic
              resources carefully curated for seekers of knowledge.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {categories.map((category) => (
              <Link to={category.link} key={category.id}>
                <Card
                  title={category.title}
                  description={category.description}
                  imageUrl={category.imageUrl}
                  badge={category.badge}
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">
              Featured <span className="text-secondary-600">Books</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most essential books in the Salafi tradition, from
              classic works to contemporary publications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              className="bg-cream-200 p-4 rounded-lg text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src="/quran.png"
                alt="Quran"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-primary-700">The Noble Quran</h3>
              <p className="text-sm text-gray-600">Translation & Commentary</p>
            </motion.div>

            <motion.div
              className="bg-cream-200 p-4 rounded-lg text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/library.jpg"
                alt="Sahih Bukhari"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-primary-700">Sahih Al-Bukhari</h3>
              <p className="text-sm text-gray-600">Hadith Collection</p>
            </motion.div>

            <motion.div
              className="bg-cream-200 p-4 rounded-lg text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/bookicon.png"
                alt="Kitab at-Tawhid"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-primary-700">Kitab at-Tawhid</h3>
              <p className="text-sm text-gray-600">Muhammad ibn Abdul-Wahhab</p>
            </motion.div>

            <motion.div
              className="bg-cream-200 p-4 rounded-lg text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/masjidNabawi.jpg"
                alt="Aqeedah Wasitiyyah"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-primary-700">Aqeedah Wasitiyyah</h3>
              <p className="text-sm text-gray-600">Ibn Taymiyyah</p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/books"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View All Books
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
