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

    @include sm {
      padding-top: 50px;
      padding-bottom: 45px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      column-gap: 120px;
      row-gap: 60px;

      @include sm {
        row-gap: 30px;
      }
    }
  }

  .achive-item {
    @apply tw-text-white;

    @include sm {
      width: 100%;
    }

    &__label {
      @apply tw-text-body-m-regular tw-mt-2;

      @include sm {
        @apply tw-text-body-s-regular;
      }
    }

    &__value {
      font-size: 76px;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: 0.01em;

      @include xs {
        font-size: 50px;
      }
    }
  }
</style>
