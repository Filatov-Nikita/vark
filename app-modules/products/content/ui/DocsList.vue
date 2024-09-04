<template>
  <div class="list">
    <DocsItem
      class="list-item"
      v-for="item in productDocs"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { DocItem } from '@/stores/products/docs';

  defineProps<{
    productDocs: DocItem[],
  }>();
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: -20px -13px;
    color: #333333;
  }

  .list-item {
    margin: 20px 13px;
    width: calc(25% - 26px);

    @include lg {
      width: calc(33.3% - 26px);
    }

    @include md {
      width: calc(50% - 26px);
    }
  }
</style>
