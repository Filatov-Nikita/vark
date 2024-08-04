<template>
  <section class="work">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Станьте частью <span class="tw-text-primary">команды</span></h2>
      <div class="wrap">
        <div class="left">
          <p v-html="texts[0]"></p>
          <p class="tw-max-w-[548px]" v-html="texts[1]"></p>
        </div>
        <div class="right">
          <Form />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Form from './Form.vue';

  const texts = [
    'Высококвалифицированные специалисты - одна из главных составляющих успешного развития предприятия.<br>Наша цель - создавать условия для их профессионального роста и самореализации.',
    'Наша компания развивается устойчивыми темпами из года в год. Мы в поиске сотрудников самых разных профессий - от инженеров, механиков, фрезеровщиков до начальников производства, исполнительных директоров.',
  ];
</script>

<style scoped lang="scss">
  .work {
    padding-top: 140px;
    padding-bottom: 110px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
  }

  .left {
    width: 100%;
    max-width: 557px;
    @apply tw-text-body-m-regular;

    p + p {
      margin-top: 20px;
    }
  }

  .right {
    width: 100%;
    max-width: 590px;
  }
</style>
