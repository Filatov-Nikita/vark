import type { Image } from '@/types/shared/image';
import doc1 from '../ui/assets/doc.jpg';

export interface BaseItem {
  name: string,
  image: Image,
};

export type ProductItem = BaseItem & { productType: string };

export type Item = BaseItem | ProductItem;

export type CatItem = {
  catName: string,
  items: Item[],
};

export const productTypes = {
  'zadvij_klin_stal': 'Задвижки клиновые стальные',
  'klapani_zatv': 'Клапаны запорные',
};

export const catList: CatItem[] = [
  {
    catName: 'Разрешительная документация',
    items: [
      {
        name: 'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В01270)',
        image: {
          width: 100,
          height: 100,
          url: doc1,
        },
        productType: productTypes['zadvij_klin_stal'],
      },
    ],
  },
  {
    catName: 'Система менеджмента качества',
    items: [
      {
        name: 'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В01270)',
        image: {
          width: 100,
          height: 100,
          url: doc1,
        },
        productType: productTypes['zadvij_klin_stal'],
      },
    ],
  },
  {
    catName: 'Лаборатория',
    items: [

    ],
  },
  {
    catName: 'Патенты',
    items: [

    ],
  },
];
