<template>
  <section class="values gray-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Ценности <span class="tw-text-primary">компании</span></h2>
      <Switcher />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Switcher from './Switcher.vue';
</script>

<style scoped lang="scss">
  .values {
    padding-top: 92px;
    padding-bottom: 70px;
  }
</style>
