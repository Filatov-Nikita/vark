<template>
  <article ref="itemRef" class="item">
    <div class="item__icon-wrap">
      <BaseIcon class="item__icon" :name="icon" />
    </div>
    <h3 class="h3 item__h">{{ title }}</h3>
    <p class="item__text">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
    icon: string,
  }>();

  const itemRef = ref<HTMLElement | null>(null);

  defineExpose({
    itemRef,
  });
</script>

<style scoped lang="scss">
  .item {
    border-radius: 20px;
    background: #2B2B2B;
    padding: 30px 35px;
    transition: background-color 200ms;
    @apply tw-text-white;

    @include sm {
      padding: 20px 24px 38px 20px;
    }

    &:hover {
      @apply tw-bg-primary;
    }

    &__h {
      @apply tw-uppercase;
    }

    &__text {
      color: #EAEAEA;
      @apply tw-mt-12 tw-text-body-m-regular;

      @include sm {
        font-size: 14px;
        line-height: 17px;
        @apply tw-mt-8;
      }
    }

    &__icon-wrap {
      display: inline-block;
      border-radius: 10px;
      background: #404040;
      margin-bottom: 24px;
      padding: 17px;

      @include sm {
        padding: 12px;
        border-radius: 7px;
        @apply tw-mb-16;
      }
    }

    &:hover &__icon-wrap {
      @apply tw-bg-white;
    }

    &__icon {
      width: 36px;
      height: 36px;
      @apply tw-fill-primary;

      @include sm {
        width: 26px;
        height: 26px;
      }
    }
  }
</style>
