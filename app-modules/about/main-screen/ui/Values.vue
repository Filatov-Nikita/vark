<template>
  <section class="values">
    <div class="col1">
      <div class="col1-wrap">
        <article class="item area-square">
          <p class="value">{{ values.areaSquare.value }} <span class="m2">м<sup>2</sup></span></p>
          <p class="label label--right">{{ values.areaSquare.label }}</p>
        </article>
        <article class="item years">
          <p class="value">{{ values.years.value }}</p>
          <p class="label">{{ values.years.label }}</p>
        </article>
        <article class="item produce-square">
          <p class="value">{{ values.produceSquare.value }}</p>
          <p class="label">{{ values.produceSquare.label }}</p>
        </article>
      </div>
    </div>
    <article class="item clients-square">
      <p class="value">{{ values.clients.value }}</p>
      <p class="label">{{ values.clients.label }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
  import values from '../model/values';
</script>

<style scoped lang="scss">
  .values {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }

  .col1 {
    width: calc(100% / 12 * 8 - 20px);
    margin: 10px;
  }

  .col1-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .clients-square {
    width: calc(100% / 12 * 4 - 20px);
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .label {
      margin-bottom: 30px;
    }
  }

  .area-square {
    width: 100%;
  }

  .years {
    width: calc(38% - 10px);
  }

  .produce-square {
    width: calc(62% - 10px);
  }

  .item {
    border-radius: 20px;
    background: #2B2B2B;
    padding: 30px 16px;
    padding-left: 45px;

    &.clients-square {
      padding-left: 32px;
    }

    &.produce-square {
      padding-left: 40px;
    }
  }

  .value {
    font-size: 92px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.03em;
  }

  .label {
    margin-top: 10px;
    font-size: 22px;
    line-height: 1.2;
    @apply tw-text-text-gray;

    &--right {
      text-align: right;
    }
  }

  .m2 {
    font-size: 50px;
  }
</style>
