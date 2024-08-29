<template>
  <FittingType class="block-fit" v-if="product.fittingType" :type="product.fittingType" />
  <p>
    {{ productAttrs.description }}
  </p>
</template>

<script setup lang="ts">
  import FittingType from './FittingType.vue';
  import type { ProductItem } from '@/stores/products';
  import type { ProductAttrs } from '@/stores/products/attrs';

  defineProps<{
    product: ProductItem,
    productAttrs: ProductAttrs,
  }>();
</script>

<style scoped lang="scss">
  .block-fit {
    margin-bottom: 24px;
  }
</style>
