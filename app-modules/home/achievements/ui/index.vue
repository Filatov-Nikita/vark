<template>
  <section class="achivements">
    <div class="wrapper">
      <div class="achivements__wrap">
        <div class="achive-item" v-for="item in items">
          <p class="achive-item__value">{{ item.value }}</p>
          <p class="achive-item__label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import items from '../model/items';
</script>

<style scoped lang="scss">
  .achivements {
    padding-top: 100px;
    padding-bottom: 70px;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      column-gap: 120px;
      row-gap: 60px;
    }
  }

  .achive-item {
    @apply tw-text-white;

    &__label {
      @apply tw-text-body-m-regular tw-mt-2;
    }

    &__value {
      font-size: 76px;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: 0.01em;
    }
  }
</style>
