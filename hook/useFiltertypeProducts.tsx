import { Api } from '@/components/shared/services/api-client';
import { typeProduct } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';
interface ReturnProps {
  typeProduct: typeProduct[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}
export const useFiltertypeProducts = (): ReturnProps => {
  const [typeProduct, setTypeProducts] = React.useState<typeProduct[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIds, { add, has, toggle }] = useSet<string>(new Set([]));
  React.useEffect(() => {
    async function getTypeProdects() {
      try {
        setLoading(true);
        const res = await Api.typeProducts.getAll();
        setTypeProducts(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTypeProdects();
  }, []);
  return { typeProduct, loading, onAddId: toggle, selectedIds };
};
