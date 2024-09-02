<template>
  <Swiper
    :space-between="10"
    :slides-per-view="1.1"
    :height="330"
    :breakpoints="{
      720: {
        'spaceBetween': 20,
        'slidesPerGroup': 2,
        'slidesPerView': 2,
        'height': 392,
      }
    }"
    @swiper="swiper = $event"
  >
    <template v-slot:container-start>
      <SwiperNav class="tw-justify-end tw-mb-8 sw-nav" @prev="swiper.slidePrev()" @next="swiper.slideNext()" />
    </template>
    <SwiperSlide
      v-for="image in images"
    >
      <img class="photo" :width="image.width" :height="image.height" :src="image.path" loading="lazy" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import type { Image } from '../model/types';

  defineProps<{
    images: Image[]
  }>();

  const swiper = ref<any>(null);
</script>

<style scoped lang="scss">
  .sw-nav {
    @include sm {
      display: none;
    }
  }

  .photo {
    border-radius: 20px;
  }
</style>
