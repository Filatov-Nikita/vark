<template>
  <div ref="section" class="items">
    <Item
      ref="itemsRef"
      class="items__item"
      v-for="item in items"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import items from '../model/items';

  const section = ref<HTMLElement | null>(null);
  const itemsRef = ref<any[]>([]);

  useIntersect(
    section,
    () => {
      itemsRef.value.forEach((item, index) => {
        setTimeout(() => {
          item.itemRef.classList.add('items__item--fade');
        }, 300 * index);
      });
    },
    () => {},
    { threshold: 0.7, once: true }
  );
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(50% - 20px);
      margin: 10px;
      visibility: hidden;

      @include md {
        width: calc(100% - 20px);
      }

      &--fade {
        visibility: visible;
        animation: fadeInDown;
        animation-duration: 500ms;
      }
    }
  }
</style>
