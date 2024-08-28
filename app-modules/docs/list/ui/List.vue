<template>
  <div class="wrap">
    <div class="items">
      <TransitionGroup name="list-item">
        <Item
          class="list-item"
          v-for="item in items"
          :key="item.name"
          :item="item"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import type { Item as TItem } from '../model/docs';

  defineProps<{
    items: TItem[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -20px -13px;

    @include sm {
      margin: -12px -8px;
    }
  }

  .list-item {
    transition: opacity 1s ease, transform 1s ease;
  }

  .list-item-leave-to, .list-item-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-item-leave-active {
    display: none;
  }

  .wrap {
    @include sm {
      max-width: 380px;
      margin: 0 auto;
    }
  }
</style>
