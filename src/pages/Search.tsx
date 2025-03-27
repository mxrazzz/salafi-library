import React from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';
import { useSearch } from '../hooks/useSearch';

const Search: React.FC = () => {
    const { query, search, results, isLoading, error } = useSearch();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search</h1>
            <SearchBar onSearch={search} />
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error.message}</p>}
            {query && results && <SearchResults query={query} />}
        </div>
    );
};

export default Search;