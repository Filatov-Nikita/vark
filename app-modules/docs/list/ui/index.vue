<template>
  <div>
    <Tabs class="tabs" :items="docTypes" v-model:activeTab="tab" />
    <Swiper :initialSlide="tab" @swiper="swiper = $event">
      <SwiperSlide
        v-for="cat in catList"
      >
        <ProductListWrap v-if="tab === 0" :items="cat.items" v-slot="{ filtredItems }">
          <List :items="filtredItems" />
        </ProductListWrap>
        <List
          v-else
          :items="cat.items"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { catList } from '../model/docs';
  import Tabs from './Tabs.vue';
  import List from './List.vue';
  import ProductListWrap from './ProductListWrap.vue';

  const swiper = ref<any>(null);
  const tab = ref(0);

  const docTypes = computed(() => catList.map(cat => cat.catName));

  watch(tab, (index) => {
    swiper.value.slideTo(index);
  });
</script>

<style scoped lang="scss">
  .tabs {
    margin-bottom: 40px;
  }
</style>
