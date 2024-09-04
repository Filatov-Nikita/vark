<template>
  <div class="tabs">
    <button
      class="tab-item"
      v-for="(item, index) in items"
      type="button"
      :class="{ 'tab-item--active': activeIndex === index }"
      @click="$emit('update:activeIndex', index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    items: string[],
    activeIndex: number,
  }>();

  defineEmits<{
    (event: 'update:activeIndex', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .tabs {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #CDCDCD;
    gap: 30px;
  }

  .tab-item {
    position: relative;
    color: #B9B9B9;
    padding-bottom: 20px;
    @apply tw-text-h3-bold tw-uppercase;

    @include sm {
      padding-bottom: 12px;
      font-size: 18px;
      line-height: 24px;
    }

    &--active {
      @apply tw-text-text-dark;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: -2px;
        @apply tw-bg-text-dark;
      }
    }
  }
</style>
