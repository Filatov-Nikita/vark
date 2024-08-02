<template>
  <div class="slider-wrap">
    <Swiper
      class="slider"
      :modules="[ SwiperNavigation ]"
      :initial-slide="initialSlide"
      :space-between="40"
      :navigation="{
        prevEl: '.prev-el',
        nextEl: '.next-el',
      }"
    >
      <button class="prev-el">
        <BaseIcon name="prev" fit />
      </button>
      <button class="next-el">
        <BaseIcon name="next" fit />
      </button>
      <SwiperSlide
        v-for="(image, ind) in images"
        class="slide"
      >
        <img class="image" :width="image.width" :height="image.height" :src="image.path" loading="lazy"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import type { Image } from '../model/types';

  defineProps<{
    initialSlide: number,
    images: Image[],
  }>();
</script>

<style scoped lang="scss">
  .slider-wrap {
    padding-top: 32px;
  }

  .slider {
    max-width: 1200px;
    margin: 0 auto;
  }

  .image {
    border-radius: 20px;
    max-height: calc(100vh - 272px);
    object-fit: contain;
  }

  .slide {
    padding: 0 60px;
  }
</style>
