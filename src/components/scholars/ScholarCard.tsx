import React from 'react';
import { Scholar } from '../../types/Scholar';

interface ScholarCardProps {
  scholar: Scholar;
}

const ScholarCard: React.FC<ScholarCardProps> = ({ scholar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{scholar.name}</h2>
      <p className="text-gray-600">{scholar.bio}</p>
      <a href={scholar.website} className="text-blue-500 hover:underline">
        Visit Website
      </a>
    </div>
  );
};

export default ScholarCard;