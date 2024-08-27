<template>
  <section class="misson">
    <div class="wrapper">
      <div class="misson__wrap">
        <h2 class="h2 misson__h2"><span class="tw-text-primary">Миссия</span> компании</h2>
        <p class="misson__text">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const text = 'Обеспечить инновационные, надежные, экологически безопасные и экономически эффективные технологические решения превосходящего качества для клиентов с проектами любого уровня сложности за счет рационального использования человеческих и технических ресурсов.';
</script>

<style scoped lang="scss">
  .misson {
    padding-top: 80px;
    padding-bottom: 120px;

    @include sm {
      padding-top: 45px;
      padding-bottom: 70px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      column-gap: 60px;
      row-gap: 30px;
    }

    &__h2 {
      max-width: 287px;
    }

    &__text {
      max-width: 650px;
      @apply tw-text-body-m-regular;
    }
  }
</style>
