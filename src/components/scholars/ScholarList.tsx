import React from 'react';
import { useScholars } from '../../hooks/useScholars';
import ScholarCard from './ScholarCard';

const ScholarList: React.FC = () => {
    const { data: scholars, isLoading, error } = useScholars();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading scholars</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scholars?.map(scholar => (
                <ScholarCard key={scholar.id} scholar={scholar} />
            ))}
        </div>
    );
};

export default ScholarList;