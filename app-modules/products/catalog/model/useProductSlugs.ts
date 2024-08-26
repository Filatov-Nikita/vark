import type { Category, ProductItem } from '@/stores/products';

export default function(categories: Ref<Category[]>, products: Ref<ProductItem[]>) {
  const slugs = computed(() => {
    const items: string[] = [];
    categories.value.forEach(category => {
      const product = products.value.find(product => product.category.id === category.id);
      if(product) items.push(product.slug);
    });
    return items;
  });

  return {
    slugs,
  }
}
