<template>
  <section class="catalog">
    <div class="wrapper">
      <Categories class="cats" :items="categories.slice(0, 1)" :slugs="slugs" :activeSlug="curCategorySlug" />
      <div class="wrap">
        <aside class="left">
          <Select class="nav-sm" :options="products" :modelValue="product" />
          <NavItems class="nav" :items="items" :activeProductSlug="curProductSlug" />
        </aside>
        <div class="right">
          <ClientOnly>
            <Model :model="model" />
          </ClientOnly>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Categories from './Categories.vue';
  import NavItems from './Nav/Items.vue';
  import Model from './Model.vue';
  import Select from './Select.vue';
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
    products: ProductItem[],
  }>();
</script>

<style scoped lang="scss">
  .catalog {
    padding-bottom: 100px;
  }

  .cats {
    margin-bottom: 50px;

    @include md {
      margin-bottom: 32px;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 110px;

    @include lg {
      column-gap: 60px;
    }
  }

  .left {
    width: 100%;
    max-width: 450px;

    @include lg {
      max-width: 360px;
    }

    @include md {
      max-width: 100%;
    }
  }

  .nav {
    @include md {
      display: none;
    }
  }

  .nav-sm {
    display: none;
    margin-bottom: 30px;

    @include md {
      display: block;
    }
  }

  .right {
    width: 100%;
    max-width: 600px;

    @include lg {
      max-width: 500px;
    }

    @include md {
      max-width: 100%;
    }
  }

  .actions {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @include md {
      padding-top: 30px;
    }
  }
</style>
