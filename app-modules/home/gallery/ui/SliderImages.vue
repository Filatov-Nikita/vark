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
      v-for="(image, index) in images"
    >
      <img class="photo" :width="image.width" :height="image.height" :src="image.url" loading="lazy" @click="updateIndex(index)" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import type { Image } from '../model/types';

  defineProps<{
    images: Image[]
  }>();

  const emit = defineEmits<{
    (event: 'update:index', ind: number):void,
  }>();

  const swiper = ref<any>(null);

  function updateIndex(ind: number) {
    emit('update:index', ind);
  }
</script>

<style scoped lang="scss">
  .sw-nav {
    @include sm {
      display: none;
    }
  }

  .photo {
    border-radius: 20px;
    width: 100%;
    height: 390px;
    object-fit: cover;
    cursor: pointer;

    @include sm {
      height: 230px;
    }
  }
</style>
