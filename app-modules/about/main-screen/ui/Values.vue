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
          <p class="value">{{ values.produceSquare.value }} <span class="m2">м<sup>2</sup></span></p>
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

    @include md {
      margin: -8px;
    }
  }

  .col1 {
    width: calc(100% / 12 * 8 - 20px);
    margin: 10px;

    @include md {
      margin: 8px;
      width: calc(100% - 16px);
    }
  }

  .col1-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @include md {
      gap: 16px;
    }
  }

  .clients-square {
    width: calc(100% / 12 * 4 - 20px);
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include md {
      margin: 8px;
      width: calc(100% - 16px);
    }

    .label {
      margin-bottom: 30px;

      @include md {
        margin-bottom: 0px;
      }
    }
  }

  .area-square {
    width: 100%;
  }

  .years {
    width: calc(38% - 10px);

    @include sm {
      width: 100%;
    }
  }

  .produce-square {
    width: calc(62% - 10px);

    @include sm {
      width: 100%;
    }
  }

  .item {
    border-radius: 20px;
    background: #2B2B2B;
    padding: 30px 16px;
    padding-left: 40px;
    transition: background-color 200ms;

    @include lg {
      padding-left: 30px;
    }

    @include md {
      padding-left: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &:hover {
      @apply tw-bg-primary;
    }

    &:hover .label {
      @apply tw-text-white;
    }

    &.clients-square {
      @include md {
        padding-left: 24px;
      }

      @include sm {
        padding-left: 16px;
      }
    }

    &.produce-square {
      padding-left: 40px;

      @include lg {
        padding-left: 30px;
      }

      @include md {
        padding-left: 24px;
      }

      @include sm {
        padding-left: 16px;
      }
    }
  }

  .value {
    font-size: 92px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.03em;

    @include lg {
      font-size: 62px;
    }

    @include md {
      font-size: 54px;
    }

    @include sm {
      font-size: 40px;
    }
  }

  .label {
    margin-top: 10px;
    font-size: 22px;
    line-height: 1.2;
    @apply tw-text-text-gray;

    @include lg {
      font-size: 18px;
    }

    @include sm {
      font-size: 16px;
    }

    &--right {
      text-align: right;

      @include sm {
        text-align: left;
      }
    }
  }

  .m2 {
    font-size: 50px;

    @include md {
      font-size: 46px
    }

    @include sm {
      font-size: 32px;
    }
  }
</style>
