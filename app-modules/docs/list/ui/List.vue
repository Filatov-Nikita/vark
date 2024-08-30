<template>
  <div class="wrap">
    <Transition name="list">
      <div class="items" v-show="shwowing">
        <DocsItem
          class="list-item"
          v-for="item in items"
          :key="item.name"
          :item="item"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import type { DocItem as TItem } from '@/stores/products/docs';

  defineProps<{
    items: TItem[],
  }>();

  const shwowing = ref(true);

  function animate() {
    shwowing.value = false;
    setTimeout(() => {
      shwowing.value = true;
    }, 20);
  }

  defineExpose({
    animate,
  });
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

  .list-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-enter-active {
    transition: opacity 1s ease, transform 1s ease;
  }

  .wrap {
    @include sm {
      max-width: 380px;
      margin: 0 auto;
    }
  }
</style>
