<template>
  <FittingType class="block-fit" v-if="product.fittingType" :type="product.fittingType" />
  <p>
    {{ product.description }}
  </p>
</template>

<script setup lang="ts">
  import FittingType from './FittingType.vue';
  import type { ProductItem } from '@/stores/products';

  defineProps<{
    product: ProductItem,
  }>();
</script>

<style scoped lang="scss">
  .block-fit {
    margin-bottom: 24px;
  }
</style>
