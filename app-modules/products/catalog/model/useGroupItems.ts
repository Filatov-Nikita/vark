import type { ProductItem, ProductType } from '@/stores/products';

export interface GroupTypeProducts {
  type: 'group',
  productType: ProductType,
  products: ProductItem[],
};

export interface GroupSingleProduct {
  type: 'single',
  product: ProductItem,
};

export type GroupItem = GroupSingleProduct | GroupTypeProducts;

export default function(products: Ref<ProductItem[]>) {

  const items = computed(() => {
    const _: GroupItem[] = [];
    const filtredTypes: string[] = [];

    products.value.forEach(product => {
      if(product.type === null) {
        _.push({
          type: 'single',
          product
        });
      } else {
        if(!filtredTypes.includes(product.type.value)) {
          _.push({
            type: 'group',
            productType: product.type,
            products: products.value.filter(pr => {
              return pr.type && product.type && pr.type.value === product.type.value;
            }),
          });
          filtredTypes.push(product.type.value);
        }
      }
    });

    return _;
  });

  return {
    items,
  }
}
