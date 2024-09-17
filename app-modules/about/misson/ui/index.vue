<template>
  <section class="misson">
    <div class="wrapper">
      <div class="misson__wrap">
        <h2 class="h2 misson__h2"><span class="tw-text-primary">Миссия</span> компании</h2>
        <div class="misson__text">
          <p>{{ text1 }}</p>
          <p>{{ text2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const text1 = 'Производство высококачественной и надежной трубопроводной арматуры для обеспечения нужд нефтегазовой, химической и энергетической отраслей Российской Федерации и ближнего зарубежья, для безусловной реализации проектов любого уровня сложности.';
  const text2 = 'Обеспечение инновационных, надежных, экологически безопасных и экономически эффективных технологических решений — наша основная цель при проектировании и изготовлении трубопроводной арматуры.';
</script>

<style scoped lang="scss">
  .misson {
    padding-top: 80px;
    padding-bottom: 90px;

    @include sm {
      padding-top: 45px;
      padding-bottom: 70px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      column-gap: 60px;
      row-gap: 30px;
    }

    &__h2 {
      max-width: 287px;
    }

    &__text {
      padding-top: 20px;
      max-width: 650px;
      @apply tw-text-body-m-regular;

      @include lg {
        padding-top: 0px;
      }

      p + p {
        margin-top: 20px;
      }
    }
  }
</style>
