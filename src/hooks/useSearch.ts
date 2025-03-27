import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '../services/api';

export const useSearch = () => {
    const [query, setQuery] = useState('');
    
    const { data: results, isLoading, error } = useQuery(
      ['search', query], 
      () => fetchSearchResults(query),
      { enabled: query.length > 0 }
    );

    const search = (newQuery: string) => {
        setQuery(newQuery);
    };

    return { query, results, search, isLoading, error };
};

export default useSearch;