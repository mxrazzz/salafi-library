import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchScholars } from '../services/scholarService';
import ScholarList from '../components/scholars/ScholarList';

const Scholars: React.FC = () => {
    const { data, error, isLoading } = useQuery('scholars', fetchScholars);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading scholars</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Scholars</h1>
            <ScholarList scholars={data} />
        </div>
    );
};

export default Scholars;