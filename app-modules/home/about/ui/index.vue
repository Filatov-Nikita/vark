<template>
  <section class="about white-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Ваш надежный <span class="tw-text-primary">поставщик</span></h2>
      <Slider />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Slider from './Slider.vue';
</script>

<style scoped lang="scss">
  .about {
    padding-top: 94px;
    padding-bottom: 70px;

    @include sm {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  }
</style>
