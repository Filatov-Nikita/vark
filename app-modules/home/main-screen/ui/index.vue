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
        <p class="main-screen__subtitle" v-html="subtitle"></p>
        <div class="main-screen__actions">
          <BaseButton class="main-screen__order" design="red-white-xl" @click="scrollOrder">Заказать продукцию</BaseButton>
          <BaseButton class="main-screen__order" design="dark-xl" :to="{ name: 'video' }">Фильм о компании</BaseButton>
        </div>
      </div>
    </div>
    <video ref="video" class="main-screen__video" :poster="poster" muted loop autoplay playsinline preload="none">
      <source
        :src="'/videos/bg.webm'"
        type="video/webm"
      />
      <source
        :src="'/videos/bg.mp4'"
        type="video/mp4"
      />
    </video>
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
  const subtitle = 'Инжиниринг, производство, поставка и&nbsp;сервисное обслуживание';

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

    @include md {
      padding-bottom: 110px;
    }

    @include sm {
      padding-top: 16px;
    }

    &__header {
      margin-bottom: 80px;
      @include sm {
        margin-bottom: 60px;
      }
    }

    &__wrap {
      max-width: 877px;
    }

    &__subtitle {
      max-width: 570px;
      margin-top: 25px;
      margin-bottom: 55px;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.25;

      @include md {
        font-size: 28px;
      }

      @include sm {
        margin-bottom: 40px;
        margin-top: 15px;
        font-size: 20px;
      }

      @include xs {
        font-size: 18px;
      }
    }

    &__order {
      @include sm {
        width: 100%;
      }
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

    &__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
</style>
