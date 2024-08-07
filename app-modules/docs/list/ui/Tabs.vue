<template>
  <div>
    <div class="items">
      <button
        class="item"
        :class="{ 'item--active': index === activeTab }"
        v-for="(item, index) in items"
        @click="$emit('update:activeTab', index)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    items: string[],
    activeTab: number,
  }>();

  defineEmits<{
    (event: 'update:activeTab', index: number): void,
  }>();
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    gap: 30px;
  }

  .item {
    padding: 14px 30px;
    border-radius: 20px;
    @apply tw-border tw-border-solid tw-border-text-gray tw-text-body-m-regular tw-text-text-gray;

    &--active {
      @apply tw-bg-white tw-text-text-dark tw-border-white;
    }
  }
</style>
