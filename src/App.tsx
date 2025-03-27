import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/common/Layout/Layout';
import Books from './pages/Books';
import BookCategories from './pages/BookCategories';
import BookDetails from './pages/BookDetails';
import Scholars from './pages/Scholars';
import NotFound from './pages/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route
              path="/books/category/:categoryId"
              element={<BookCategories />}
            />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/scholars" element={<Scholars />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
