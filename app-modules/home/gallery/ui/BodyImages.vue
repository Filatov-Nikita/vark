<template>
  <div class="wrap">
    <div class="images">
      <button
        class="image"
        v-for="(image, ind) in images"
        @click="showedIndex = ind"
      >
        <img class="image__img" :width="image.width" :height="image.height" :src="image.path" loading="lazy" />
      </button>
    </div>
    <BaseModal :model-value="showedIndex !== null" @update:model-value="showedIndex = null" anim-dir="x" no-off-scroll>
      <BodyImagesSlider v-if="showedIndex !== null" :initial-slide="showedIndex" :images="images" />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import type { Image } from '../model/types';
  import BodyImagesSlider from './BodyImagesSlider.vue';

  defineProps<{
    images: Image[],
  }>();

  const showedIndex = ref<number | null>(null);
</script>

<style scoped lang="scss">
  .wrap {
    padding: 10px;
    padding-top: 32px;

    @include sm {
      padding: 0px;
      padding-top: 24px;
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }

  .image {
    width: calc(25% - 20px);
    margin: 10px;
    border-radius: 20px;
    overflow: hidden;

    @include lg {
      width: calc(100% / 12 * 4 - 20px);
    }

    @include md {
      width: calc(50% - 20px);
    }

    @include sm {
      width: calc(100% - 20px);
    }
  }
</style>
