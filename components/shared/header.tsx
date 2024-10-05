import { cn } from '@/lib/utils';
import { Container } from './container';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Левая часть */}
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image src='/logo.png' alt='Logo' width={35} height={35} />
            <div>
              <h1 className='text-2xl uppercase font-black'>КРОССОВКИ</h1>
              <p className='text-sm text-gray-400 leading-3'>от оригинальных брендов</p>
            </div>
          </div>
        </Link>

        {/* Правая часть */}
        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-2'>
            <User size={16} />
            Войти
          </Button>
        </div>
      </Container>
    </header>
  );
};
