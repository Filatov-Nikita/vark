<template>
  <section ref="section" class="achivements">
    <div class="wrapper">
      <div class="achivements__wrap">
        <div class="achive-item" v-for="item in items">
          <p class="achive-item__value">
            <span v-if="ssr">1</span>
            <NumberAnimation
              v-else
              ref="numbers"
              :from="1"
              :to="item.value"
              :duration="1.7"
              :format="theFormat"
              easing="easeOutQuad"
              :autoplay="false"
            />
            <span v-if="item.after">{{ item.after }}</span>
          </p>
          <p class="achive-item__label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import items from '../model/items';
  //@ts-ignore
  import NumberAnimation from 'vue-number-animation';

  const ssr = import.meta.server;

  function theFormat(value: number) {
    return prettyAmount(value.toFixed(0));
  }

  const numbers = ref<any[] | null>(null);
  const section = ref<HTMLElement | null>(null)

  useIntersect(
    section,
    () => {
      numbers.value?.forEach((el) => {
        el?.restart();
      });
    }, () => {},
    { threshold: 0.8, once: true }
  );
</script>

<style scoped lang="scss">
  .achivements {
    padding-top: 100px;
    padding-bottom: 70px;

    @include sm {
      padding-top: 50px;
      padding-bottom: 45px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 60px;

      @include lg {
        column-gap: 100px;
        justify-content: flex-start;
      }

      @include md {
        column-gap: 120px;
      }

      @include sm {
        row-gap: 30px;
      }
    }
  }

  .achive-item {
    @apply tw-text-white;

    @include sm {
      width: 100% !important;
    }

    &:nth-child(1) {
      width: 280px;
    }

    &:nth-child(2) {
      width: 140px;
    }

    &:nth-child(3) {
      width: 280px;
    }

    &:nth-child(4) {
      width: 162px;
    }

    &__label {
      @apply tw-text-body-m-regular tw-mt-2;

      @include sm {
        @apply tw-text-body-s-regular;
      }
    }

    &__value {
      font-size: 76px;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: 0.01em;

      @include xs {
        font-size: 50px;
      }
    }
  }
</style>
