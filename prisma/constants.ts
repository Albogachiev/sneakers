export const categories = [
  {
    name: 'кроссовки',
  },
  {
    name: 'зимняя обувь',
  },
  {
    name: 'классическая обувь',
  },
  {
    name: 'летняя обувь',
  },
  {
    name: 'беговая обувь',
  },
];

export const _typeProducts = [
  {
    name: 'Кроссовки для бега',
    price: 179,
    imageUrl: 'https://example.com/images/running-shoes.png',
  },
  {
    name: 'Кроссовки для тренировок',
    price: 159,
    imageUrl: 'https://example.com/images/training-shoes.png',
  },
  {
    name: 'Спортивные туфли',
    price: 139,
    imageUrl: 'https://example.com/images/sport-shoes.png',
  },
  {
    name: 'Зимние ботинки',
    price: 199,
    imageUrl: 'https://example.com/images/winter-boots.png',
  },
  {
    name: 'Ботинки для города',
    price: 159,
    imageUrl: 'https://example.com/images/urban-boots.png',
  },
  {
    name: 'Кожаные туфли',
    price: 129,
    imageUrl: 'https://example.com/images/leather-shoes.png',
  },
  {
    name: 'Летние сандалии',
    price: 89,
    imageUrl: 'https://example.com/images/summer-sandals.png',
  },
  {
    name: 'Мокасины',
    price: 129,
    imageUrl: 'https://example.com/images/moccasins.png',
  },
  {
    name: 'Лоферы',
    price: 149,
    imageUrl: 'https://example.com/images/loafers.png',
  },
  {
    name: 'Челси',
    price: 169,
    imageUrl: 'https://example.com/images/chelsea-boots.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));
export const products = [
  {
    name: 'Кроссовки для бега',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=d98282f1ab006f761bfaf91d8512de838b4d9ac7c51c9b3b-10504219-images-thumbs&n=13',
    categoryId: 1,
  },
  {
    name: 'Кроссовки для тренировок',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=8e52d1be81e689461f7905d70a92d249_l-5424324-images-thumbs&n=13',
    categoryId: 1,
  },
  {
    name: 'Зимние ботинки',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=8e52d1be81e689461f7905d70a92d249_l-5424324-images-thumbs&n=13',
    categoryId: 2,
  },
  {
    name: 'Ботинки для города',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=9f16c6526a73f3e92bc8edad3ed2d57150639fd3-5877394-images-thumbs&n=13',
    categoryId: 2,
  },
  {
    name: 'Кожаные туфли',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=528313b671e279b1e3f5bc8c2d7600596aebb791-12527723-images-thumbs&n=13',
    categoryId: 3,
  },
  {
    name: 'Летние сандалии',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=b2884d8c6eee0b2c6ce04689002a7cba5cb38d81-9671619-images-thumbs&n=13',
    categoryId: 4,
  },
  {
    name: 'Мокасины',
    imageUrl:
      'https://avatars.mds.yandex.net/i?id=528313b671e279b1e3f5bc8c2d7600596aebb791-12527723-images-thumbs&n=13',
    categoryId: 3,
  },
  {
    name: 'Лоферы',
    imageUrl: 'https://static.tildacdn.com/tild6630-3834-4336-a361-343934653761/IMG_0458.jpg',
    categoryId: 3,
  },
];
