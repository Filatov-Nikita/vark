<template>
  <div class="main-screen">
    <div class="wrapper">
      <Header class="main-screen__header" v-model:showedMenu="showedMenuSm" />
      <MenuSm :showed="showedMenuSm" @close="showedMenuSm = false">
        <template #header>
          <Header v-model:showedMenu="showedMenuSm" />
        </template>
      </MenuSm>
      <div class="main-screen__wrap">
        <h1 class="h1">{{ title }}</h1>
        <p class="main-screen__subtitle">{{ subtitle }}</p>
        <BaseButton design="red-white-xl" @click="scrollForm">Заказать продукцию</BaseButton>
      </div>
    </div>
    <video ref="video" class="main-screen__video" src="/videos/bg.mp4" :poster="poster" muted loop preload="none"></video>
    <div class="main-screen__overlay"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Header from '@/app-modules/header/ui/index.vue';
  import MenuSm from '@/app-modules/header/ui/MenuSm.vue';
  import poster from './assets/header.jpg';

  const showedMenuSm = ref(false);

  const title = 'ПРОИЗВОДСТВО ТРУБОПРОВОДНОЙ АРМАТУРЫ';
  const subtitle = 'Надежность и качество в каждой детали';

  function scrollForm() {
    const formEl = document.querySelector('.order-form');
    if(!formEl) return;
    formEl.scrollIntoView({ behavior: 'smooth' });
  }

  const video = ref<HTMLVideoElement | null>(null);

  onMounted(() => {
    video.value?.play();
  });
</script>

<style scoped lang="scss">
  .main-screen {
    padding-top: 30px;
    padding-bottom: 130px;
    position: relative;

    &__header {
      margin-bottom: 80px;
    }

    &__wrap {
      max-width: 877px;
    }

    &__subtitle {
      margin-top: 25px;
      margin-bottom: 55px;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.25;
    }

    &__video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: rgba(0, 0, 0, 0.6);
    }
  }
</style>
