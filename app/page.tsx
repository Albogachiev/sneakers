import { Container, TopBar, Title, Filters, ProductsGroupList } from '@/components/shared';

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
                title='Все'
                items={[
                  {
                    id: 1,
                    name: 'one',
                    sneakersType: [{ type: 'беговые' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: 'one',
                    sneakersType: [{ type: 'летние' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1200 }],
                  },
                  {
                    id: 3,
                    name: 'one',
                    sneakersType: [{ type: 'походные' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1600 }],
                  },
                ]}
              />

              <ProductsGroupList
                categoryId={2}
                title='Походные кросовки'
                items={[
                  {
                    id: 1,
                    name: 'one',
                    sneakersType: [{ type: 'беговые' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: 'one',
                    sneakersType: [{ type: 'летние' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1200 }],
                  },
                  {
                    id: 3,
                    name: 'one',
                    sneakersType: [{ type: 'походные' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1600 }],
                  },
                ]}
              />

              <ProductsGroupList
                categoryId={3}
                title='Летние кросовки'
                items={[
                  {
                    id: 1,
                    name: 'one',
                    sneakersType: [{ type: 'беговые' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: 'one',
                    sneakersType: [{ type: 'летние' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1200 }],
                  },
                  {
                    id: 3,
                    name: 'one',
                    sneakersType: [{ type: 'походные' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1600 }],
                  },
                ]}
              />

              <ProductsGroupList
                categoryId={4}
                title='Зимние кросовки'
                items={[
                  {
                    id: 1,
                    name: 'one',
                    sneakersType: [{ type: 'беговые' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1000 }],
                  },
                  {
                    id: 2,
                    name: 'one',
                    sneakersType: [{ type: 'летние' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1200 }],
                  },
                  {
                    id: 3,
                    name: 'one',
                    sneakersType: [{ type: 'походные' }],
                    imageUrl: '',
                    sneakersPrice: [{ price: 1600 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
