<template>
  <Swiper
    :space-between="20"
    :slides-per-group="2"
    :slides-per-view="2"
    :height="392"
    @swiper="swiper = $event"
  >
    <template v-slot:container-start>
      <SwiperNav class="tw-justify-end tw-mb-8" @prev="swiper.slidePrev()" @next="swiper.slideNext()" />
    </template>
    <SwiperSlide
      v-for="image in images"
    >
      <img :width="image.width" :height="image.height" :src="image.path" loading="lazy" />
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
