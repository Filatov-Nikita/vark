<template>
  <section class="perfomance">
    <div class="wrapper">
      <h2 class="h2 h-mb-60"><span class="tw-text-primary">Производственные</span> мощности</h2>
      <div class="items">
        <div
          v-for="item in items"
          class="item"
        >
          <img class="icon" width="127" height="129" :src="item.image" loading="lazy" alt="">
          <p class="label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import items from '../model/items';
</script>

<style scoped lang="scss">
  .perfomance {
    padding-top: 90px;
    padding-bottom: 80px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  .icon {
    width: 127px;
  }

  .label {
    color: #EAEAEA;
    font-size: 22px;
    line-height: 1.25;
    @apply tw-mt-30 tw-uppercase tw-font-medium;
  }
</style>
