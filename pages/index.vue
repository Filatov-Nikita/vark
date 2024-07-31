<template>
  <MainScreen />
  <Achievements />
  <About />
  <Gallery />
  <Quality />
  <Map />
  <Clients />
  <Posts />
  <OrderProductsForm />
  <Footer />
</template>

<script lang="ts" setup>
  import Achievements from '@/app-modules/home/achievements/ui/index.vue';
  import Quality from '@/app-modules/home/quality/ui/index.vue';
  import Clients from '@/app-modules/home/clients/ui/index.vue';
  import MainScreen from '@/app-modules/home/main-screen/ui/index.vue';
  import OrderProductsForm from '@/app-modules/order-products-form/ui/index.vue';
  import Posts from '@/app-modules/home/posts/ui/index.vue';
  import About from '@/app-modules/home/about/ui/index.vue';
  import Gallery from '@/app-modules/home/gallery/ui/index.vue';
  import Map from '@/app-modules/home/map/ui/index.vue';
  import Footer from '@/app-modules/footer/ui/index.vue';

  definePageMeta({
    layout: false,
  });
</script>

<style>

</style>
