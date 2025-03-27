import React from 'react';
import { useParams } from 'react-router-dom';
import { useScholar } from '../hooks/useScholars';
import Layout from '../components/common/Layout/Layout';
import ScholarCard from '../components/scholars/ScholarCard';

const ScholarDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: scholar, isLoading, error } = useScholar(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading scholar details.</div>;
    }

    return (
        <Layout>
            <div className="p-4">
                {scholar && <ScholarCard scholar={scholar} />}
            </div>
        </Layout>
    );
};

export default ScholarDetails;