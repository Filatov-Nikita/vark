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
    'Высококвалифицированные специалисты - одна из&nbsp;главных составляющих успешного развития предприятия.<br>Наша цель - создавать условия для&nbsp;их профессионального роста и&nbsp;самореализации.',
    'Наша компания развивается устойчивыми темпами из&nbsp;года в&nbsp;год. Мы&nbsp;в&nbsp;поиске сотрудников самых разных профессий - от&nbsp;инженеров, механиков, фрезеровщиков до&nbsp;начальников производства, исполнительных директоров.',
  ];
</script>

<style scoped lang="scss">
  .work {
    padding-top: 140px;
    padding-bottom: 110px;

    @include sm {
      padding-top: 50px;
      padding-bottom: 70px;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 40px;

    @include sm {
      row-gap: 30px;
    }
  }

  .left {
    width: 100%;
    max-width: 557px;
    @apply tw-text-body-m-regular;

    @include lg {
      max-width: 400px;
    }

    @include md {
      max-width: 557px;
    }

    @include sm {
      @apply tw-text-body-s-regular;
    }

    p + p {
      margin-top: 20px;

      @include sm {
        margin-top: 12px;
      }
    }
  }

  .right {
    width: 100%;
    max-width: 590px;

    @include lg {
      max-width: 475px;
    }

    @include md {
      max-width: 100%;
    }
  }
</style>
