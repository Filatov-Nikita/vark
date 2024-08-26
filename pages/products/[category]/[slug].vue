<template>
  <div class="page-pt">
    <div class="wrapper">
      <h1 class="h1 h-mb-60">Продукция</h1>
    </div>
    <Catalog />
    <RangeValues :product="curProduct" />
    <Content :product="curProduct" />
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
</script>
