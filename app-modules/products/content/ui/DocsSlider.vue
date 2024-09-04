<template>
  <Swiper
    class="slider"
    :slidesPerView="1.3"
    :spaceBetween="16"
  >
    <SwiperSlide
      v-for="item in productDocs"
    >
      <DocsItem class="doc" :item="item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import type { DocItem } from '@/stores/products/docs';

  defineProps<{
    productDocs: DocItem[],
  }>();
</script>

<style scoped lang="scss">
  .slider {
    display: none;

    @include sm {
      display: block;
    }
  }

  .doc {
    width: 100% !important;
    margin: 0 !important;
  }
</style>
