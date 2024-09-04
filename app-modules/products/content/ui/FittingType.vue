<template>
  <div class="item">
    <span class="icon-wrap">
      <img class="icon" :src="type.icon" loading="lazy" :alt="type.value">
    </span>
    <span class="name">{{ type.name }}</span>
  </div>
</template>

<script setup lang="ts">
  import type { FittingType } from '@/stores/products';

  defineProps<{
    type: FittingType,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .icon-wrap {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #EAEAEA;
    padding: 8px;
  }

  .icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .name {
    @apply tw-text-body-m-bold;

    @include sm {
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>
