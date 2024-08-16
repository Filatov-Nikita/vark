<template>
  <div class="content white-area">
    <div class="wrapper">
      <SlideItem label="Описание" showedInitial>
        <BlockDescription :product="product" />
      </SlideItem>
      <SlideItem label="Характеристики">
        attrs
      </SlideItem>
      <SlideItem label="Документация">
        docs
      </SlideItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BlockDescription from './BlockDescription.vue';
  import type { ProductItem } from '@/stores/products';

  defineProps<{
    product: ProductItem,
  }>();
</script>

<style scoped lang="scss">
  .content {
    padding-bottom: 100px;
  }
</style>
