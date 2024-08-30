import type { ProductItem } from '@/stores/products';
import type { DocItem } from '@/stores/products/docs';

export default function(products: Ref<ProductItem[]>, productDocs: Record<string, DocItem[]>) {
  const options = computed(() => {
    return products.value.map(product => product.name);
  });

  const curProduct = ref(options.value[0]);

  const filtredDocs = computed(() => {
    const product = products.value.find(p => p.name === curProduct.value);
    if(!product) return [];
    return productDocs[product.slug];
  });

  return {
    options,
    curProduct,
    filtredDocs,
  }
}
