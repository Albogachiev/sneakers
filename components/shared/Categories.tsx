'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category';

export const Categories: React.FC<{ className: string }> = ({ className }) => {
  const categories = [
    { id: 1, name: 'Зимние кросовки' },
    { id: 2, name: 'Летние кросовки' },
    { id: 3, name: 'Походные кросовки' },
    { id: 4, name: 'Все' },
    { id: 5, name: 'кроссовка5' },
    { id: 6, name: 'кроссовка6' },
  ];
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({ name, id }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={id}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
