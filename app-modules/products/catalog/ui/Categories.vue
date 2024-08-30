<template>
  <div class="btn-group">
    <NuxtLink
      class="btn-item"
      :class="{ 'btn-item--active': item.slug === activeSlug }"
      v-for="(item, index) in items"
      :key="item.id"
      :to="
        $route.name === 'products-category-slug'
          ? { params: { category: item.slug, slug: slugs[index] } }
          : { query: { productCategorySlug: item.slug, productSlug: slugs[index] } }
      "
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { Category } from '@/stores/products';

  defineProps<{
    items: Category[],
    slugs: string[],
    activeSlug: string,
  }>();
</script>

<style scoped lang="scss">
  .btn-group {
    display: inline-flex;
    border: 1px solid #424242;
    border-radius: 20px;
    overflow: hidden;
  }

  .btn-item {
    padding: 15px 30px;
    @apply tw-text-text-gray;

    &--active {
      background: #424242;
      @apply tw-text-white tw-font-bold;
    }
  }
</style>
