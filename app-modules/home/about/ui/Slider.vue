<template>
  <Swiper
    :space-between="20"
    :slides-per-view="2"
    :slides-per-group="2"
    @swiper="swiper = $event"
  >
    <template v-slot:container-start>
      <SwiperNav
        class="tw-justify-end tw-mb-8"
        @prev="swiper.slidePrev()"
        @next="swiper.slideNext()"
      />
    </template>
    <SwiperSlide
      v-for="item in items"
      class="!tw-h-auto"
    >
      <Item v-bind="item" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import items from '../model/items';

  const swiper = ref<any>(null);
</script>
