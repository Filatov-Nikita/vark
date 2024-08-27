<template>
  <aside class="items">
    <button
      class="item"
      :class="{ 'item--active': active === index }"
      v-for="(tab, index) in tabs"
      @mousemove="$emit('change:active', index)"
    >
      <span>0{{ index + 1 }}</span>
      <span v-html="tab"></span>
    </button>
  </aside>
</template>

<script setup lang="ts">
  defineProps<{
    active: number,
  }>();

  defineEmits<{
    (event: 'change:active', index: number): void,
  }>();

  const tabs = [
    'Наши клиенты',
    'Наши сотрудники',
    'Эффективность и&nbsp;качество',
    'Технологии и&nbsp;инновации',
  ];
</script>


<style scoped lang="scss">
  .item {
    padding: 48px 0;
    display: flex;
    align-items: center;
    gap: 60px;
    font-size: 24px;
    line-height: 1.25;
    @apply tw-uppercase tw-text-left tw-w-full tw-text-text-gray tw-border-b-2 tw-border-solid tw-border-text-gray;

    @include lg {
      padding: 32px 0;
      gap: 40px;
    }

    @include sm {
      padding: 24px 0;
      gap: 24px;
      font-size: 18px;
    }

    &--active {
      font-weight: 700;
      @apply tw-text-text-dark;
    }
  }
</style>
