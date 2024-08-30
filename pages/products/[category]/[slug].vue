<template>
  <div class="page-pt" v-if="curProduct && curModel && curAttrs && curDocs">
    <div class="wrapper">
      <h1 class="h1 h-mb-60">Продукция</h1>
    </div>
    <Catalog :product="curProduct" :model="curModel" />
    <RangeValues :productAttrs="curAttrs" />
    <Content :product="curProduct" :productAttrs="curAttrs" :productDocs="curDocs" />
    <OrderProductsForm />
  </div>
</template>

<script setup lang="ts">
  import Catalog from '@/app-modules/products/catalog/ui/index.vue';
  import RangeValues from '@/app-modules/products/range-values/ui/index.vue';
  import Content from '@/app-modules/products/content/ui/index.vue';
  import OrderProductsForm from '@/app-modules/order-products-form/ui/index.vue';

  const productsStore = useProductsStore();

  const route = useRoute();

  const curProduct = computed(() => {
    return productsStore.getProductBySlug(route.params.slug as string);
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
</script>
