<template>
  <Swiper
    :space-between="20"
    :slides-per-group="2"
    :slides-per-view="2"
    :height="392"
    @swiper="swiper = $event"
  >
    <template v-slot:container-start>
      <SwiperNav class="tw-justify-end" @prev="swiper.slidePrev()" @next="swiper.slideNext()" />
    </template>
    <!-- <SwiperSlide
      v-for="image in images"
    >
      <img :width="image.width" height="" src="" loading="lazy" />
    </SwiperSlide> -->
  </Swiper>
</template>

<script setup lang="ts">
  const swiper = ref<any>(null);
</script>
