import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchBooks = async () => {
  // Mock data for development
  return [
    {
      id: '1',
      title: 'Tafsir Ibn Kathir',
      author: 'Ibn Kathir',
      publishedDate: '1373',
      description: 'A classic Sunni tafsir by Ibn Kathir, a highly influential Sunni scholar during the Mamluk era in Syria.',
      coverImageUrl: 'https://example.com/ibn-kathir.jpg',
      categories: ['Tafsir'],
      isbn: '9789960892740',
      language: 'Arabic'
    },
    {
      id: '2',
      title: 'Sahih Al-Bukhari',
      author: 'Imam Bukhari',
      publishedDate: '846',
      description: 'One of the Kutub al-Sittah (six major hadith collections) of Sunni Islam.',
      coverImageUrl: 'https://example.com/bukhari.jpg',
      categories: ['Hadith'],
      isbn: '9789960892757',
      language: 'Arabic'
    }
  ];
};

export const getBookById = async (id: string) => {
  const books = await fetchBooks();
  return books.find(book => book.id === id);
};

export const fetchScholars = async () => {
  // Mock data for development
  return [
    {
      id: '1',
      name: 'Ibn Taymiyyah',
      biography: 'A medieval Sunni Muslim scholar, theologian and logician.',
      imageUrl: 'https://example.com/ibn-taymiyyah.jpg',
      works: ['Al-Aqidah Al-Wasitiyah', 'Majmu al-Fatawa'],
      birthDate: '1263-01-22',
      deathDate: '1328-09-26'
    },
    {
      id: '2',
      name: 'Muhammad ibn Abd al-Wahhab',
      biography: 'A religious leader, reformer, and theologian from Najd in central Arabia.',
      imageUrl: 'https://example.com/abd-al-wahhab.jpg',
      works: ['Kitab at-Tawhid', 'Kashf ash-Shubuhat'],
      birthDate: '1703-01-01',
      deathDate: '1792-06-22'
    }
  ];
};

export const getScholarById = async (id: string) => {
  const scholars = await fetchScholars();
  return scholars.find(scholar => scholar.id === id);
};

export const fetchSearchResults = async (query: string) => {
  const books = await fetchBooks();
  const scholars = await fetchScholars();
  
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) || 
    book.author.toLowerCase().includes(query.toLowerCase())
  );
  
  const filteredScholars = scholars.filter(scholar => 
    scholar.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return { books: filteredBooks, scholars: filteredScholars };
};

export default api;