<template>
  <div class="about page-pt">
    <div class="wrapper">
      <h1 class="h1"><span class="tw-text-primary">Восточная Арматурная</span> Компания</h1>
      <p class="about__description" v-html="description"></p>
      <Values />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Values from './Values.vue';

  const description = '«Восточная арматурная компания» была основана в 2007 году. За 17 лет мы из небольшого предприятия мы выросли в современную динамично развивающуюся производственную компанию.<br/><br/>На данный момент «Восточная арматурная компания» является одним из лидеров по производству трубопроводной арматуры на территории Российской Федерации, предназначенной для эксплуатации на опасных производственных объектах нефтегазовой, химической и энергетической отраслей.';
</script>

<style scoped lang="scss">
  .about {
    padding-bottom: 90px;

    @include sm {
      padding-bottom: 35px;
    }

    &__description {
      max-width: 813px;
      margin-top: 30px;
      margin-bottom: 60px;
      @apply tw-text-body-m-regular;

      @include sm {
        margin-top: 20px;
        margin-bottom: 50px;
        @apply tw-text-body-s-regular;
      }
    }
  }
</style>
