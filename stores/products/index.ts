export interface Category {
  id: number,
  name: string,
  slug: string,
  catalogHref: string,
};

export interface ProductType {
  name: string,
  value: string,
};

export interface FittingType {
  name: string,
  value: string,
  icon: string,
};

export interface ProductItem {
  id: number,
  name: string,
  slug: string,
  category: Category,
  type: ProductType | null,
  fittingType: FittingType | null,
  catalogHref: string | null,
};

export const useProductsStore = defineStore('productsStore', () => {
  const ID = useId();

  const categories = ref<Category[]>([
    {
      id: ID.get(),
      name: 'Промышленная арматура',
      slug: 'promyshlennaya-armatura',
      catalogHref: '/categories-catalogs/promyshlennaya-armatura.pdf',
    },
    {
      id: ID.get(),
      name: 'Специальная арматура',
      slug: 'specialnaya-armatura',
      catalogHref: '#',
    },
  ]);

  const productTypes = ref<ProductType[]>([
    {
      name: 'Краны шаровые',
      value: 'krany-sharovyie',
    },
    {
      name: 'Задвижки шиберные',
      value: 'zadvizhki-shibiernyie',
    },
  ]);

  const fittingTypes = ref([
    {
      name: 'Запорная арматура',
      value: 'zapornaia-armatura',
      icon: '/images/fitting-types/zapornaia-armatura.jpg',
    },
    {
      name: 'Распределительно-смесительная арматура',
      value: 'raspriedielitielno-smiesitielnaia',
      icon: '/images/fitting-types/raspriedielitielno-smiesitielnaia.jpg',
    },
    {
      name: 'Обратная арматура',
      value: 'obratnaia',
      icon: '/images/fitting-types/obratnaia.jpg',
    },
    {
      name: 'Предохранительная арматура',
      value: 'priedokhranitielnaia',
      icon: '/images/fitting-types/priedokhranitielnaia.jpg',
    },
    {
      name: 'Отключающая арматура',
      value: 'otkliuchaiushchaia',
      icon: '/images/fitting-types/otkliuchaiushchaia.jpg',
    },
    {
      name: 'Запорная, отсечная арматура',
      value: 'zapornaia-otsechnaya',
      icon: '/images/fitting-types/zapornaia-armatura.jpg',
    },
    {
      name: 'Запорная, запорно-регулирующая арматура',
      value: 'zapornaia-zaporno-regulirushaya',
      icon: '/images/fitting-types/zapornaia-armatura.jpg',
    },
    {
      name: 'Запорная, отсечная, регулирующая, запорно-регулирующая арматура',
      value: 'zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya',
      icon: '/images/fitting-types/zapornaia-armatura.jpg',
    },
    {
      name: 'Переключающая, смешивающая арматура',
      value: 'perekluchaushaya-smeshivaushaya',
      icon: '/images/fitting-types/zapornaia-armatura.jpg',
    },
  ] as const satisfies readonly FittingType[]);

  type FittingTypesMap = { [ K in typeof fittingTypes.value[number] as K['value'] ]: K };

  const fittingTypesMap = computed<FittingTypesMap>(() => {
    return fittingTypes.value.reduce((acc, item) => {
      acc[item['value']] = item;
      return acc;
    }, {} as any);
  });

  const products = ref<ProductItem[]>([
    {
      id: ID.get(),
      name: 'Задвижки клиновые стальные',
      slug: 'zadvizhki-klinovyie-stalnyie',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya'],
      catalogHref: '/products-catalogs/zadvizhki-klinovyie-stalnyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Клапаны запорные',
      slug: 'klapany-zapornyie',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya'],
      catalogHref: '/products-catalogs/klapany-zapornyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Затворы обратные',
      slug: 'zatvory-obratnyie',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['obratnaia'],
      catalogHref: '/products-catalogs/zatvory-obratnyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Затворы дисковые поворотные (заслонки)',
      slug: 'zatvory-diskovyie-povorotnyie-zaslonki',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['zapornaia-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/zatvory-diskovyie-povorotnyie-zaslonki.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые разборные из двух частей',
      slug: 'krany-sharovyie-razbornyie-iz-dvukh-chastiei',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые цельносварные из трех частей',
      slug: 'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые разборные из трех частей',
      slug: 'krany-sharovyie-razbornyie-iz-triekh-chastiei',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые цельносварные из двух частей',
      slug: 'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые разборные с верхней крышкой',
      slug: 'krany-sharovyie-razbornyie-s-vierkhniei-kryshkoi',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые цельносварные из трех частей подземные',
      slug: 'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei-podziemnyie',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые цельносварные из двух частей подземные',
      slug: 'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei-podziemnyie',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые высокоцикличные',
      slug: 'krany-sharovyie-vysokotsiklichnyie',
      category: categories.value[0],
      type: productTypes.value[0],
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: '/products-catalogs/krany-sharovyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Клапаны стальные пружинные предохранительные',
      slug: 'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['priedokhranitielnaia'],
      catalogHref: '/products-catalogs/klapany-stalnyie-pruzhinnyie-priedokhranitielnyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Задвижки шиберные (ЗМС)',
      slug: 'zadvizhki-shibiernyie-zms',
      category: categories.value[0],
      type: productTypes.value[1],
      fittingType: fittingTypesMap.value['zapornaia-armatura'],
      catalogHref: '/products-catalogs/zadvizhki-shibiernyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Задвижки шиберные ЗШ',
      slug: 'zadvizhki-shibiernyie-zsh',
      category: categories.value[0],
      type: productTypes.value[1],
      fittingType: fittingTypesMap.value['zapornaia-armatura'],
      catalogHref: '/products-catalogs/zadvizhki-shibiernyie.pdf',
    },
    {
      id: ID.get(),
      name: 'Устройства переключающие',
      slug: 'ustroistva-pieriekliuchaiushchiie',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['perekluchaushaya-smeshivaushaya'],
      catalogHref: '/products-catalogs/ustroistva-pieriekliuchaiushchiie.pdf',
    },
    {
      id: ID.get(),
      name: 'Блоки предохранительных клапанов',
      slug: 'bloki-priedokhranitielnykh-klapanov',
      category: categories.value[0],
      type: null,
      fittingType: fittingTypesMap.value['priedokhranitielnaia'],
      catalogHref: '/products-catalogs/bloki-priedokhranitielnykh-klapanov.pdf',
    },
    {
      id: ID.get(),
      name: 'Краны шаровые специальные',
      slug: 'krany-sharovyie-spietsialnyie',
      category: categories.value[1],
      type: null,
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: null,
    },
    {
      id: ID.get(),
      name: 'Предохранительные клапаны специальные',
      slug: 'priedokhranitielnyie-klapany-spietsialnyie',
      category: categories.value[1],
      type: null,
      fittingType: fittingTypesMap.value['priedokhranitielnaia'],
      catalogHref: null,
    },
    {
      id: ID.get(),
      name: 'Блоки предохранительных клапанов специальные',
      slug: 'bloki-priedokhranitielnykh-klapanov-spietsialnyie',
      category: categories.value[1],
      type: null,
      fittingType: fittingTypesMap.value['priedokhranitielnaia'],
      catalogHref: null,
    },
    {
      id: ID.get(),
      name: 'Клапаны обратные специальные',
      slug: 'klapany-obratnyie-spietsialnyie',
      category: categories.value[1],
      type: null,
      fittingType: fittingTypesMap.value['zapornaia-otsechnaya-regulirushaya-zaporno-regulirushaya'],
      catalogHref: null,
    },
  ]);

  function getProductsByCatSlug(categorySlug: string): ProductItem[] {
    const items = products.value.filter(product => product.category.slug === categorySlug);
    return items;
  }

  function getProductBySlug(slug: string): ProductItem {
    const item = products.value.find(product => product.slug === slug);
    if(!item) throw new Error(`product - ${slug} не найден`);
    return item;
  }

  return {
    categories,
    products,
    getProductsByCatSlug,
    getProductBySlug,
  }
});

function useId() {
  let inc = 1;

  function get() {
    return ++inc;
  }

  return {
    get,
  }
}
