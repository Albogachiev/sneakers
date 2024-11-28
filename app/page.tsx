import {
  Container,
  TopBar,
  Title,
  Filters,
  // ProductCard,
  ProductsGroupList,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все кроссовки' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                categoryId={1}
                title='Все кроссовки'
                items={[
                  { id: 1, name: 'one', items: [{ price: 5000 }], imageUrl: '', price: 111 },
                  { id: 2, name: 'one', items: [{ price: 5000 }], imageUrl: '', price: 111 },
                  { id: 3, name: 'one', items: [{ price: 5000 }], imageUrl: '', price: 111 },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
