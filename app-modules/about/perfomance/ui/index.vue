<template>
  <section ref="section" class="perfomance">
    <div class="wrapper">
      <h2 class="h2 h-mb-60"><span class="tw-text-primary">Производственные</span> мощности</h2>
      <div class="items">
        <div
          v-for="item in items"
          class="item"
          ref="itemsRef"
        >
          <div class="icon-wrap">
            <img class="icon" width="127" height="129" :src="item.image" loading="lazy" alt="">
          </div>
          <p class="label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import items from '../model/items';

  const section = ref<HTMLElement | null>(null);
  const itemsRef = ref<HTMLElement[]>([]);

  let threshold = 0.7;

  if(import.meta.client && window.screen.width <= 719.9) threshold = 0.4;

  useIntersect(
    section,
    () => {
      itemsRef.value.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('item--fade');
        }, 500 * index);
      });
    },
    () => {},
    { threshold, once: true },
  )
</script>

<style scoped lang="scss">
  .perfomance {
    padding-top: 90px;
    padding-bottom: 80px;

    @include sm {
      padding-top: 35px;
      padding-bottom: 45px;
    }
  }

  .items {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @include md {
      grid-template-columns: 100%;
      gap: 60px;
    }

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      top: 64px;
      left: 0;
      height: 1px;
      background: #545454;
      z-index: -1;

      @include lg {
        top: 48px;
      }

      @include md {
        width: 1px;
        height: 100%;
        left: 48px;
        top: 0px;
      }
    }
  }

  .item {
    visibility: hidden;

    &:last-child {
      @apply tw-bg-bg-grafit;
    }

    @include md {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 10px 0;
      @apply tw-bg-bg-grafit;
    }

    &--fade {
      visibility: visible;
      animation-name: fadeInDown;
      animation-duration: 500ms;
    }
  }

  .item:first-child .icon-wrap {
    padding-left: 0px;
  }

  .item:first-child .label {
    padding-left: 0px;
  }

  .icon-wrap {
    width: fit-content;
    padding: 0 20px;
    @apply tw-bg-bg-grafit;

    @include md {
      padding: 0px;
      flex-shrink: 0;
    }
  }

  .icon {
    width: 127px;

    @include lg {
      width: 96px;
    }
  }

  .label {
    color: #EAEAEA;
    font-size: 22px;
    line-height: 1.25;
    padding-left: 20px;
    @apply tw-mt-30 tw-uppercase tw-font-medium;

    @include lg {
      font-size: 16px;
    }

    @include md {
      padding-left: 0px;
      margin-top: 0;
      max-width: 225px;
    }

    @include xs {
      font-size: 14px;
    }
  }
</style>
