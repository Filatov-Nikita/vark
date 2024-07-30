<template>
  <button class="tab-btn" :class="{ 'tab-btn--active': active }" type="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    active: boolean,
  }>();
</script>

<style scoped lang="scss">
  .tab-btn {
    padding: 14px 30px;
    border: 1px solid #696969;
    color: #696969;
    border-radius: 20px;
    @apply tw-text-body-m-regular;

    &--active {
      background-color: #333333 !important;
      border-color: #333333 !important;
      color: theme('colors.white') !important;
    }

    &:hover {
      @apply tw-text-text-gray-hover tw-border-text-gray-hover;
    }
  }
</style>
