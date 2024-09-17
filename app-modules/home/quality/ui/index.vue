<template>
  <section ref="section" class="quality">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Контроль качества <span class=" tw-text-primary">продукции</span></h2>
      <div class="quality__wrap">
        <article
          class="quality-item"
          v-for="(step, index) in steps"
          :style="{
            '--color': step.color,
            '--w': step.width,
            '--text-w': step.text_w,
          }"
        >
          <div ref="items" class="quality-item__head">
            <h3>Шаг {{ index + 1 }}</h3>
          </div>
          <p class="quality-item__text" v-html="step.text"></p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import steps from '../model/steps';

  const section = ref<HTMLElement | null>(null);
  const items = ref<HTMLElement[] | null>(null);

  useIntersect(
    section,
    () => {
      items.value?.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('quality-item__head--fade');
        }, 300 * index);
      });
    },
    () => {},
    { threshold: 0.7, once: true }
  )
</script>

<style scoped lang="scss">
  .quality {
    padding-top: 90px;
    padding-bottom: 80px;

    @include sm {
      padding-top: 80px;
      padding-bottom: 50px;
    }

    &__wrap {
      overflow-y: hidden;
      padding-bottom: 40px;
      width: 100%;
      display: flex;
    }
  }

  .quality-item {
    position: relative;
    min-width: var(--w);
    width: 100%;

    &:not(:first-child) {
      margin-left: -24px;
    }

    &__head {
      padding: 13px 24px;
      background: var(--color);
      border-radius: 10px;
      visibility: hidden;
      @apply tw-text-primary tw-text-body-m-bold tw-uppercase;

      &--fade {
        visibility: visible;
        animation-name: fadeInLeft;
        animation-duration: 500ms;
      }
    }

    &__text {
      box-sizing: content-box;
      max-width: var(--text-w);
      padding: 20px 30px 0 24px;
    }
  }
</style>
