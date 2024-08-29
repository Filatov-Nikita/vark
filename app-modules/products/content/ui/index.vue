<template>
  <div class="content white-area">
    <div class="wrapper">
      <SlideItem label="Описание" showedInitial>
        <BlockDescription :product="product" :productAttrs="productAttrs" />
      </SlideItem>
      <SlideItem label="Характеристики">
        <TableAttrs :productAttrs="productAttrs" />
      </SlideItem>
      <SlideItem label="Документация">
        docs
      </SlideItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BlockDescription from './BlockDescription.vue';
  import TableAttrs from './TableAttrs.vue';
  import type { ProductItem } from '@/stores/products';
  import type { ProductAttrs } from '@/stores/products/attrs';

  defineProps<{
    product: ProductItem,
    productAttrs: ProductAttrs,
  }>();
</script>

<style scoped lang="scss">
  .content {
    padding-bottom: 100px;
  }
</style>
