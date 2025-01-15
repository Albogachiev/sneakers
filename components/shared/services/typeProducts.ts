import { typeProduct } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<typeProduct[]> => {
  return (await axiosInstance.get<typeProduct[]>(ApiRoutes.TYPE_PRODUCTS)).data;
};
