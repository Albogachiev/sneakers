import { cn } from '@/lib/utils';
import React from 'react';

export const Categories: React.FC = ({ className }) => {
  const cr = [
    'кроссовка1',
    'кроссовка1',
    'кроссовка1',
    'кроссовка1',
    'кроссовка1',
    'кроссовка1',
    'кроссовка1',
  ];
  const activeInd = 0;
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cr.map((ct, ind) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeInd === ind && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={ind}
        >
          <button>{ct}</button>
        </a>
      ))}
    </div>
  );
};
