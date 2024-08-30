<template>
  <section class="catalog">
    <div class="wrapper">
      <Categories class="cats" :items="categories" :slugs="slugs" :activeSlug="curCategorySlug" />
      <div class="wrap">
        <aside class="left">
          <NavItems :items="items" :activeProductSlug="($route.params.slug as string)" />
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
  import useGroupItems from '../model/useGroupItems';
  import useProductSlugs from '../model/useProductSlugs';
  import Model from './Model.vue';
  import type { ProductItem } from '@/stores/products';
  import type { ModelItem } from '@/stores/products/models';

  defineProps<{
    product: ProductItem,
    model: ModelItem,
  }>();

  const route = useRoute();
  const router = useRouter();
  const productsStore = useProductsStore();
  const { categories, products } = storeToRefs(productsStore);

  const curCategorySlug = computed({
    get() {
      return route.params.category as string;
    },
    set(slug) {
      router.replace({ params: {} });
    },
  });

  const curCategory = computed(() => {
    const cat = categories.value.find(category => category.slug === curCategorySlug.value);
    return cat!;
  });

  const { slugs } = useProductSlugs(categories, products);
  const catProducts = computed(() => productsStore.getProductsByCatSlug(curCategorySlug.value));
  const { items } = useGroupItems(catProducts);
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
