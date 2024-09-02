<template>
  <div class="slider-wrap">
    <Swiper
      class="slider"
      :initial-slide="initialSlide"
      :space-between="20"
      :modules="[ SwiperNavigation ]"
      :breakpoints="{
        720: {
          'spaceBetween': 40,
          'navigation': {
            nextEl: '.next-el',
            prevEl: '.prev-el',
          },
        }
      }"
    >
      <button class="prev-el sl-btn">
        <BaseIcon name="prev" fit />
      </button>
      <button class="next-el sl-btn">
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
    width: auto;
    height: auto;
    max-height: calc(100vh - 272px);
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;

    @include sm {
      padding: 0px;
    }
  }

  .sl-btn {
    @include sm {
      display: none;
    }
  }
</style>
