<template>
  <div>
    <Tabs class="tabs" :items="tabs" v-model:activeTab="tab" />
    <Swiper :initialSlide="tab" :allowTouchMove="false" @swiper="swiper = $event">
      <SwiperSlide>
        <Select class="p-select" :options="options" v-model="curProduct" />
        <List ref="productsDocsRef" :items="filtredDocs" />
      </SwiperSlide>
      <SwiperSlide v-for="items in commonDocs">
        <List :items="items" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import useDocs from '../model/useDocs';
  import useProductsDocs from '../model/useProductsDocs';
  import Tabs from './Tabs.vue';
  import List from './List.vue';
  import Select from './Select.vue';

  const swiper = ref<any>(null);

  const { products } = storeToRefs(useProductsStore());
  const { productDocuments } = useProductsDocsStore();
  const { tabs, tab, commonDocs } = useDocs();
  const { options, curProduct, filtredDocs } = useProductsDocs(products, productDocuments);
  const productsDocsRef = ref<any>(null);

  watch(curProduct, () => {
    if(productsDocsRef.value) productsDocsRef.value.animate();
  });

  watch(tab, (index) => {
    swiper.value.slideTo(index);
  });
</script>

<style scoped lang="scss">
  .tabs {
    margin-bottom: 40px;

    @include sm {
      margin-bottom: 20px;
    }
  }

  .p-select {
    max-width: 340px;
    margin-bottom: 18px;

    @include sm {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
</style>
