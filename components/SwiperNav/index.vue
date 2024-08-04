<template>
  <div class="swiper-nav">
    <SwiperNavBtn :design="design" position="left" @click="$emit('prev')" />
    <SwiperNavBtn :design="design" position="right" @click="$emit('next')" />
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      design?: 'light' | 'dark',
    }>(),
    {
      design: 'light',
    },
  );

  defineEmits<{
    (event: 'prev'): void,
    (event: 'next'): void,
  }>();
</script>

<style scoped lang="scss">
  .swiper-nav {
    display: flex;
    align-items: center;
  }
</style>
