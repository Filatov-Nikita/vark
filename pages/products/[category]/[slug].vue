<template>
  <div class="page-pt" v-if="curProduct && curModel && curAttrs && curDocs">
    <div class="wrapper">
      <h1 class="h1 h-mb-60">Продукция</h1>
    </div>
    <Catalog
      :products="products"
      :product="curProduct"
      :slugs="slugs"
      :curProductSlug="curProductSlug"
      :curCategorySlug="curCategorySlug"
      :items="items"
      :model="curModel"
      :categories="categories"
    >
      <template #actions>
        <BaseButton class="order" design="red-md" @click="scrollOrder">
          Заказать
        </BaseButton>
        <BaseButtonDownload v-if="curProduct.catalogHref" :href="curProduct.catalogHref">
          Каталог изделия
        </BaseButtonDownload>
      </template>
    </Catalog>
    <RangeValues :productAttrs="curAttrs" />
    <Content :product="curProduct" :productAttrs="curAttrs" :productDocs="curDocs" />
    <OrderProductsForm />
  </div>
</template>

<script setup lang="ts">
  import Catalog from '@/app-modules/products/catalog/ui/index.vue';
  import RangeValues from '@/app-modules/products/range-values/ui/index.vue';
  import Content from '@/app-modules/products/content/ui/index.vue';
  import OrderProductsForm from '@/app-modules/order-products-form/ui/index.vue';
  import useProductCatalog from '@/app-modules/products/catalog/model/useProductCatalog';
  import useCurrentProduct from '@/app-modules/products/catalog/model/useCurrentProduct';

  const route = useRoute();

  const curCategorySlug = computed({
    get() {
      return route.params.category as string;
    },
    set() {}
  });

  const curProductSlug = computed({
    get() {
      return route.params.slug as string;
    },
    set() {}
  });

  const {
    curProduct,
    curModel,
    curAttrs,
    curDocs,
  } = useCurrentProduct(curProductSlug);

  const { slugs, items, categories, products } = useProductCatalog(curCategorySlug);
</script>

<style scoped lang="scss">
  .order {
    max-width: 234px;
    width: 100%;

    @include md {
      max-width: 100%;
    }
  }
</style>
