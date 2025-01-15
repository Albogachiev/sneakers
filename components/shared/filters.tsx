'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { CheckboxFiltersGroup, RangeSlider } from './index';
import { useFiltertypeProducts } from '@/hook/useFiltertypeProducts';

interface PriceProps {
  priceForm?: string;
  priceTo?: string;
}
interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { typeProduct, loading, onAddId, selectedIds } = useFiltertypeProducts();
  const [prices, setPrice] = React.useState({ priceForm: 0, priceTo: 1000 });
  const types = typeProduct.map((type) => ({ value: String(type.id), text: type.name }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value });
  };
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* Верхние чекбоксы */}

      <CheckboxFiltersGroup
        title='тип кроссовок'
        name='sneakersTypes'
        className='mb-5'
        limit={6}
        defaultItems={types.slice(0, 6)}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        loading={loading}
        items={types}
      />

      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        // onClickCheckbox={}
        // selected={}
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
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={String(prices.priceForm)}
            onChange={(e) => updatePrice('priceForm', Number(e.target.value))}
          />
          <Input
            type='number'
            min={100}
            max={40000}
            placeholder='1000'
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceForm, prices.priceTo]}
          // onValueChange={}
        />
      </div>

      <CheckboxFiltersGroup
        title='Цвет'
        name='color'
        className='mt-5'
        limit={6}
        // defaultItems={}
        items={[
          { text: 'красные', value: 'красные' },
          { text: 'белые', value: 'белые' },
          { text: 'черные', value: 'черные' },
        ]}
        // loading={}
        // onClickCheckbox={}
        // selected={}
      />
    </div>
  );
};
