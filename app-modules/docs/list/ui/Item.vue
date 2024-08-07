<template>
  <article class="item">
    <div class="img-wrap">
      <img :width="item.image.width" :height="item.image.height" :src="item.image.path" />
    </div>
    <h2 class="name">{{ item.name }}</h2>
  </article>
</template>

<script setup lang="ts">
  import type { Item as TItem } from '../model/docs';

  defineProps<{
    item: TItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    margin: 20px 13px;
    width: calc(25% - 26px);
  }

  .name {
    @apply tw-text-body-s-regular tw-text-white tw-mt-10;
  }

  .img-wrap {
    border-radius: 10px;
    padding: 7px;
    border: 1px solid #EAEAEA;
    @apply tw-bg-white;

    img {
      width: 100%;
    }
  }
</style>
