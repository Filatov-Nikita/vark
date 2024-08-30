export default function(curSlug: Ref<string>) {
  const productsStore = useProductsStore();

  const curProduct = computed(() => {
    return productsStore.getProductBySlug(curSlug.value);
  });

  const { productsAttrs } = storeToRefs(useProductsAttrsStore());
  const { productModels } = useProductsModelsStore();
  const { productDocuments } = useProductsDocsStore();

  const curAttrs = computed(() => {
    return productsAttrs.value[curProduct.value.slug];
  });

  const curDocs = computed(() => {
    return productDocuments[curProduct.value.slug];
  });

  const curModel = computed(() => {
    return productModels[curProduct.value.slug];
  });

  return {
    curProduct,
    curAttrs,
    curDocs,
    curModel,
  }
}
