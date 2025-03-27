import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getScholarById } from '../../services/scholarService';
import { Scholar } from '../../types/Scholar';

interface ScholarDetailsProps {
  scholarId: string;
}

const ScholarDetails: React.FC<ScholarDetailsProps> = ({ scholarId }) => {
  const { data: scholar, isLoading, error } = useQuery<Scholar, Error>(
    ['scholar', scholarId],
    () => getScholarById(scholarId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading scholar details</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{scholar.name}</h1>
      <p className="mt-2">{scholar.biography}</p>
      <h2 className="mt-4 text-xl">Works</h2>
      <ul className="list-disc list-inside">
        {scholar.works.map((work) => (
          <li key={work.id}>{work.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarDetails;