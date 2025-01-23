'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { CheckboxFiltersGroup, RangeSlider } from './index';
import { useFiltertypeProducts } from '@/hook/useFiltertypeProducts';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: string;
  priceTo?: string;
}
interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [prices, setPrice] = React.useState({ priceFrom: 0, priceTo: 1000 });
  const { typeProduct, loading, onAddId, selected } = useFiltertypeProducts();
  const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set([]));
  const [color, { toggle: toggleColor }] = useSet<string>(new Set([]));
  const types = typeProduct.map((type) => ({ value: String(type.id), text: type.name }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value });
  };
  const filters = {
    ...prices,
    sizes: Array.from(sizes),
    types: Array.from(selected),
    color: Array.from(color),
  };
  useEffect(() => {
    console.log(filters, '<<<');
  }, [prices, sizes, types]);
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
        selected={selected}
        loading={loading}
        items={types}
      />

      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        selected={sizes}
        onClickCheckbox={toggleSizes}
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            min={100}
            max={1000}
            placeholder='1000'
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
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
          { text: 'бежевые', value: 'бежевые' },
          { text: 'серые', value: 'серые' },
          { text: 'коричневые', value: 'коричневые' },
          { text: 'оранжевые', value: 'оранжевые' },
          { text: 'желтые', value: 'желтые' },
          { text: 'зеленые', value: 'зеленые' },
        ]}
        // loading={}
        onClickCheckbox={toggleColor}
        selected={color}
      />
    </div>
  );
};
