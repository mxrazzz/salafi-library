import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchSearchResults } from '../../services/api';
import { Book } from '../../types/Book';
import { Scholar } from '../../types/Scholar';
import Card from '../common/Card/Card';

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { data, isLoading, isError } = useQuery(['searchResults', query], () => fetchSearchResults(query), {
    enabled: !!query,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching search results.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.books?.map((book: Book) => (
        <Card key={book.id} title={book.title} description={book.description} />
      ))}
      {data?.scholars?.map((scholar: Scholar) => (
        <Card key={scholar.id} title={scholar.name} description={scholar.bio} />
      ))}
    </div>
  );
};

export default SearchResults;