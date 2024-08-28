<template>
  <section class="sys-manage gray-area">
    <div class="wrapper">
      <div class="wrap">
        <div class="left">
          <h2 class="h2 h-mb-50 title">Система менеджмента <span class="tw-text-primary">ISO&nbsp;9001</span></h2>
          <p>{{ texts[0] }}</p>
          <p class="text2">{{ texts[1] }}</p>
        </div>
        <div class="right">
          <Slider class="sys-slider" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Slider from './Slider.vue';

  const texts = [
    'Качество производимой продукции контролирует внедренная интегрированная система менеджмента ISO 9001.',
    'Это позволяет гарантировать полное соответствие требованиям российских и международных стандартов, что подтверждается действующими сертификатами.',
  ];
</script>

<style scoped lang="scss">
  .sys-manage {
    padding-top: 70px;
    padding-bottom: 140px;
    @apply tw-text-body-m-regular;

    @include sm {
      padding-top: 35px;
      padding-bottom: 70px;
      @apply tw-text-body-s-regular;
    }
  }

  .left {
    width: calc(50% - 34px);
    margin: 17px;

    @include md {
      width: calc(100% - 30px);
      margin: 15px;
    }

    p + p {
      @apply tw-mt-16;
    }
  }

  .right {
    width: calc(50% - 34px);
    margin: 17px;

    @include md {
      width: calc(100% - 30px);
      margin: 15px;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;

    @include md {
      margin: -15px;
    }
  }

  .text2 {
    max-width: 502px;
  }

  .title {
    max-width: 426px;
  }

  .sys-slider {
    @include md {
      max-width: 600px;
    }
  }
</style>
