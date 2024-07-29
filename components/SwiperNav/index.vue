<template>
  <div class="swiper-nav">
    <SwiperNavBtn position="left" @click="$emit('prev')" />
    <SwiperNavBtn position="right" @click="$emit('next')" />
  </div>
</template>

<script setup lang="ts">
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
