import { useQuery } from '@tanstack/react-query';
import { fetchScholars } from '../services/scholarService';
import { Scholar } from '../types/Scholar';

export const useScholars = () => {
  return useQuery<Scholar[], Error>('scholars', fetchScholars);
};

export const useScholar = (id: string) => {
  return useQuery<Scholar, Error>(['scholar', id], () => 
    fetchScholars().then(scholars => scholars.find(s => s.id === id))
  );
};

export default useScholars;