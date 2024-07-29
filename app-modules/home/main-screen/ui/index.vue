<template>
  <div class="main-screen">
    <div class="wrapper">
      <Header class="main-screen__header" />
      <div class="main-screen__wrap">
        <h1 class="h1">{{ title }}</h1>
        <p class="main-screen__subtitle">{{ subtitle }}</p>
        <BaseButton design="red-white-xl" @click="scrollForm">Заказать продукцию</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '@/app-modules/header/ui/index.vue';

  const title = 'ПРОИЗВОДСТВО ТРУБОПРОВОДНОЙ АРМАТУРЫ';
  const subtitle = 'Надежность и качество в каждой детали';

  function scrollForm() {
    const formEl = document.querySelector('.order-form');
    if(!formEl) return;
    formEl.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<style scoped lang="scss">
  .main-screen {
    padding-top: 30px;
    padding-bottom: 130px;
    background-image: url('./assets/header.jpg');
    background-size: cover;
    background-position: center;

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
  }
</style>
