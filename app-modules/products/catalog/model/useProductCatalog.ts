import useProductSlugs from './useProductSlugs';
import useGroupItems from './useGroupItems';

export default function(curCategorySlug: Ref<string>) {
  const productsStore = useProductsStore();
  const { categories, products } = storeToRefs(productsStore);

  const curCategory = computed(() => {
    const cat = categories.value.find(category => category.slug === curCategorySlug.value);
    return cat;
  });

  const { slugs } = useProductSlugs(categories, products);
  const catProducts = computed(() => productsStore.getProductsByCatSlug(curCategorySlug.value));
  const { items } = useGroupItems(catProducts);

  return {
    curCategory,
    slugs,
    items,
    categories,
    products: productsStore.products,
  }
}
