<template>
  <section class="slide-item">
    <div class="slide-item__head" @click="showed = !showed">
      <h2 class="slide-item__name h3">{{ label }}</h2>
      <button class="btn-icon" :class="{ 'btn-icon--active': showed }">
        <BaseIcon name="slide-closed" fit />
      </button>
    </div>
    <SlideUpDown :active="showed" :duration="300">
      <div class="slide-item__body">
        <slot></slot>
      </div>
    </SlideUpDown>
  </section>
</template>

<script setup lang="ts">
  //@ts-ignore;
  import SlideUpDown from 'vue-slide-up-down';

  const props = withDefaults(defineProps<{
    showedInitial?: boolean,
    label: string,
  }>(), {
    showedInitial: false,
  });

  const showed = ref(props.showedInitial);
</script>

<style scoped lang="scss">
  .slide-item {
    border: 1px solid #DEDEDE;
    border-width: 1px 0;
    padding: 10px 0;

    &__head {
      padding: 30px 0;
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 30px;
      transition: opacity 300ms;

      @include sm {
        padding: 20px 0;
      }
    }

    &__head:hover {
      opacity: 0.6;
    }

    &__name {
      flex-grow: 1;
    }

    &__body {
      padding-bottom: 25px;

      @include sm {
        padding-bottom: 20px;
      }
    }
  }

  .btn-icon {
    width: 24px;
    height: 24px;
    transition: transform 300ms;

    &--active {
      transform: rotate(-45deg);
    }
  }
</style>
