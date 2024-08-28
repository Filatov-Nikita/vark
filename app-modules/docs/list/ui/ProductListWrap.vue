<template>
  <div>
    <Select class="p-select" :options="productTypesMap" v-model="productType" />
    <slot :filtredItems="filtredItems" />
  </div>
</template>

<script setup lang="ts">
  import { productTypes } from '../model/docs';
  import Select from './Select.vue';
  import type { Item as TItem } from '../model/docs';

  const props = defineProps<{
    items: TItem[],
  }>();

  const productTypesMap = computed(() => Object.values(productTypes));

  const productType = ref(productTypesMap.value[0]);

  const filtredItems = computed(() => props.items.filter(item => {
    if('productType' in item) return item.productType === productType.value;
    return true;
  }));
</script>

<style scoped lang="scss">
  .p-select {
    max-width: 340px;
    margin-bottom: 18px;

    @include sm {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
</style>
