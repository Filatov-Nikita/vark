<template>
  <section class="catalog">
    <div class="wrapper">
      <Categories class="cats" :items="categories.slice(0, 1)" :slugs="slugs" :activeSlug="curCategorySlug" />
      <div class="wrap">
        <aside class="left">
          <NavItems :items="items" :activeProductSlug="curProductSlug" />
        </aside>
        <div class="right">
          <ClientOnly>
            <Model :model="model" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Categories from './Categories.vue';
  import NavItems from './Nav/Items.vue';
  import Model from './Model.vue';
  import type { GroupItem } from '../model/useGroupItems';
  import type { ProductItem, Category } from '@/stores/products';
  import type { ModelItem } from '@/stores/products/models';

  defineProps<{
    product: ProductItem,
    model: ModelItem,
    categories: Category[],
    slugs: string[],
    items: GroupItem[],
    curCategorySlug: string,
    curProductSlug: string,
  }>();
</script>

<style scoped lang="scss">
  .catalog {
    padding-bottom: 100px;
  }

  .cats {
    margin-bottom: 50px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 110px;
  }

  .left {
    width: 100%;
    max-width: 450px;
  }

  .right {
    width: 100%;
    max-width: 600px;
  }
</style>
