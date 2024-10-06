'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './index';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* Верхние чекбоксы */}

      <CheckboxFiltersGroup
        title='тип кроссовок'
        name='sneakersTypes'
        className='mb-5'
        onClickCheckbox={filters.sneakersTypes}
        selected={filters.sneakersTypes}
        items={[
          { text: 'спортивные', value: '1' },
          { text: 'беговые', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '37 см', value: '37' },
          { text: '39 см', value: '39' },
          { text: '40 см', value: '40' },
        ]}
      />

      {/* Фильтр цен */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={40000} />
          <Input type='number' min={100} max={40000} placeholder='40000' />
        </div>
      </div>
    </div>
  );
};
