import { Scholar } from '../types/Scholar';
import { api, fetchScholars as apiFetchScholars, getScholarById as apiGetScholarById } from './api';

export const fetchScholars = async (): Promise<Scholar[]> => {
  return apiFetchScholars();
};

export const getScholarById = async (id: string): Promise<Scholar> => {
  return apiGetScholarById(id);
};